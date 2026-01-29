import { t } from 'elysia'

export const PostSchema = {
    // body for creating a post
    create: t.Object({
        title: t.String(),
        content: t.String()
    }),
    // body for updating a post (partial)
    update: t.Partial(
        t.Object({
            title: t.String(),
            content: t.String()
        })
    )
}
