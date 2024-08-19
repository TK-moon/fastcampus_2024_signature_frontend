/**
 * @DIR /src/api/comment/index.ts
 */

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
