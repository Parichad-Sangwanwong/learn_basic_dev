import { Elysia } from 'elysia'
import { PostService } from './service'
import { PostSchema } from './model'

export const postController = new Elysia({ prefix: '/posts' })
    .get('/', async () => {
        return await PostService.getAll()
    })
    .get('/:id', async ({ params: { id } }) => {
        return await PostService.get(Number(id))
    })
    .post('/', async ({ body }) => {
        return await PostService.create(body)
    }, {
        body: PostSchema.create
    })
    .patch('/:id', async ({ params: { id }, body }) => {
        return await PostService.update(Number(id), body)
    }, {
        body: PostSchema.update
    })
    .delete('/:id', async ({ params: { id } }) => {
        return await PostService.delete(Number(id))
    })
