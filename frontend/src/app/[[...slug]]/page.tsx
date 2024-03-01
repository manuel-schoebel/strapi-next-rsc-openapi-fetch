import { client } from "@/api";
import { BlocksRenderer } from "@/components/blocks/BlocksRenderer";
import { blocksMap } from "@/config/blocksMap";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const path = slug ? slug.join("/") : "/";

  const pages = await client.GET("/pages", {
    params: {
      query: {
        filters: {
          // @ts-ignore - openapi generated from strapi results in Record<string, never>
          // https://github.com/strapi/strapi/issues/19644
          path: {
            $eq: path,
          },
        },
        // @ts-ignore
        populate: {
          blocks: { populate: "*" },
        },
      },
    },
  });

  const page = pages?.data?.data ? pages.data.data[0] : null;
  if (!page) {
    notFound();
  }

  return (
    <div className="mb-24">
      <BlocksRenderer
        blocks={page.attributes?.blocks || []}
        blocksMap={blocksMap}
      />

      <div className="mt-12 mx-auto max-w-xl">
        <Link href="/comments">View comments</Link>
      </div>
    </div>
  );
}
