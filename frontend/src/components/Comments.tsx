"use client";
import { getComments } from "@/api/getComments";
import { Headline } from "@/components/elements/Headline";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface IComments {}

function Comments({}: IComments) {
  const { isPending, data } = useQuery({
    queryKey: ["getComments"],
    queryFn: () => getComments(),
  });

  return (
    <div>
      <Headline variant="h2">Comments</Headline>
      {isPending && <p>Loading comments...</p>}
      {data &&
        data.map((comment) => (
          <div key={comment.id} className="my-6">
            <Headline variant="h3">{comment.attributes?.comment}</Headline>
            <p>{comment.attributes?.comment}</p>
          </div>
        ))}
    </div>
  );
}

export { Comments };
