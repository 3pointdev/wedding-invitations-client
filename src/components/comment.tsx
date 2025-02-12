"use client";

import { ReactElement } from "react";
import CommentDto from "src/dto/comment.dto";

interface CommentProps {
  list: CommentDto[];
}

export default function Comment({ list }: CommentProps): ReactElement {
  console.log(list);
  return (
    <div>
      <ul>
        {list.map((comment: CommentDto) => {
          return (
            <li
              key={`comment_${comment.id}`}
              className="flex items-center justify-center gap-4"
            >
              <p>{comment.name}</p>
              <p>{comment.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
