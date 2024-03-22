/**
 * Example how to use the openapi types in a component
 */

import { components } from "@/api/strapi";
import React from "react";

export interface ICommentsWithTypes {
  comments: components["schemas"]["CommentListResponseDataItem"][];
}

function CommentsWithTypes({ comments }: ICommentsWithTypes) {
  return (
    <>
      {comments.map((c, i) => (
        // you should not use the index as key, but the id of the comment
        <div key={c.id}>
          <h3>{c.attributes?.username}</h3>
          <p>{c.attributes?.comment}</p>
        </div>
      ))}
    </>
  );
}

export { CommentsWithTypes };
