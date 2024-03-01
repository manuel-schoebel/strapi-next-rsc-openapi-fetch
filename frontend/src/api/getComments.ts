import { client } from ".";

export async function getComments() {
  const comments = await client.GET("/comments", {
    cache: "no-cache",
  });
  return comments?.data?.data || [];
}
