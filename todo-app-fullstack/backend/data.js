import { encrypt } from "./utils/encryption.js";

export let users = [
  {
    email: encrypt("alex@user.com"),
    password: encrypt("alex"),
    todos: [],
  },
  {
    email: encrypt("sam@user.com"),
    password: encrypt("sam"),
    todos: [],
  },
  {
    email: encrypt("max@user.com"),
    password: encrypt("max"),
    todos: [],
  },
];
