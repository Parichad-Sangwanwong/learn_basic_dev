import { t } from 'elysia'
export const UserSchema = {
    // body for creating a user
    create: t.Object({
        name: t.String(),
        age: t.Integer(),
        email: t.String({ format: 'email' })
    }),
    // body for updating a user (partial)
    update: t.Partial(
        t.Object({
            name: t.String(),
            age: t.Integer(),
            email: t.String({ format: 'email' })
        })
    )
}
