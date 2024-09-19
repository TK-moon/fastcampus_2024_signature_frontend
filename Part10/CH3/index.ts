/**
 * @DIR /src/api/user/index.ts
 */

import { User, UserRequest, UserResponse } from "./types";
import { auth_options } from "../auth/signin";

async function fetchUserList(): Promise<User[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  return data;
}

async function handler(req: UserRequest, res: UserResponse) {
  if (req.method !== "GET") {
    res.status(400).json({ error_message: "Bad request" });
    return;
  }

  const user_list = await fetchUserList();
  res.status(201).json({ list: user_list });
}

export { handler as userHandler };
