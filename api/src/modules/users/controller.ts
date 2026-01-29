import { Elysia } from 'elysia'
import { UserService } from './service'
import { UserSchema } from './model'
import { t } from 'elysia'

export const userController = new Elysia({ prefix: '/users' })
    .get('/:id', async ({ params: { id } }) => {
        return await UserService.get(Number(id))
    })
    .post('/', async ({ body }) => {
        return await UserService.create(body)
    }, {
        body: UserSchema.create
    })
    .patch('/:id', async ({ params: { id }, body }) => {
        return await UserService.update(Number(id), body)
    }, {
        body: UserSchema.update
    })
    .delete('/:id', async ({ params: { id } }) => {
        return await UserService.delete(Number(id))
    })
