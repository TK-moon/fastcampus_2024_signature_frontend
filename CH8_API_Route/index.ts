/**
 * @DIR /src/api/comment/index.ts
 */

import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/api/types";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function fetchComments(post_id: string): Promise<Comment[]> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`
  );
  const data: Comment[] = await result.json();

  return data;
}

interface ExtendsNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export interface CommentsResponse {
  comments: Comment[];
}

export async function commentsApiHandler(
  req: ExtendsNextApiRequest,
  res: NextApiResponse<CommentsResponse | ErrorResponse>
) {
  if (req.method !== "GET") {
    return res.status(400).json({ error_message: "Bad request" });
  }

  const post_id = req.query.id;
  if (Number.isNaN(parseInt(req.query.id))) {
    return res.status(400).json({ error_message: "Bad request" });
  }

  try {
    const result = await fetchComments(post_id);

    res.status(200).json({
      comments: result,
    });
  } catch (e) {
    res.status(500).json({
      error_message: "Failed to fetch",
    });
  }
}
