import { Comments } from "@/components/Comments";

export default async function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="mb-24">
      <div className="mt-12 mx-auto max-w-xl">
        <Comments />
      </div>
    </div>
  );
}
