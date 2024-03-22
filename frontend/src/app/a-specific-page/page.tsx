import { client } from "@/api";

export default async function Page() {
  const pageResponse = await client.GET("/pages/{id}", {
    params: {
      path: {
        id: 1,
      },
    },
  });

  const pagesResponse = await client.GET("/pages", {
    params: {
      query: {
        filters: {
          // @ts-ignore - openapi generated from strapi results in Record<string, never>
          // https://github.com/strapi/strapi/issues/19644
          path: {
            $eq: "/",
          },
        },
        // @ts-ignore
        populate: {
          blocks: { populate: "*" },
        },
      },
    },
  });
  console.log("pagesResponse", pagesResponse.data?.data);

  const pageData = pageResponse.data?.data?.attributes;
  return <pre>{JSON.stringify(pageData, null, 2)}</pre>;
}
