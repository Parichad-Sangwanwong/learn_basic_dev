import { Elysia } from "elysia";
import { openapi } from '@elysiajs/openapi'
import 'dotenv/config';
import { userController } from './modules/users/controller'
import { postController } from './modules/posts/controller'

const app = new Elysia()
  .use(openapi())
  .get('/', 'Hello Elysia')
  .use(userController)
  .use(postController)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
