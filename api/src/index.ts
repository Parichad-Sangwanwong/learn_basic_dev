import { Elysia } from "elysia";
import { openapi } from '@elysiajs/openapi'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

const app = new Elysia()
  .use(openapi())
  .get('/', 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id)
  .post('/form', ({ body }) => body)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

