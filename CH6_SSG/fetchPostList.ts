import { Post } from "./types";

export async function fetchPostList(): Promise<Post[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await result.json();

  return data;
}
