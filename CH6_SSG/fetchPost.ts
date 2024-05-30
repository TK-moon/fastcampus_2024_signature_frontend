import { Post } from "./types";

export async function fetchPost(id: string): Promise<Post> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data: Post = await result.json();

  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
}
