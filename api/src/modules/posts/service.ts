import { db } from '../../db/index'
import { postsTable } from '../../db/schema'
import { eq, and, isNull } from 'drizzle-orm'
import { PostSchema } from './model'

export const PostService = {
    /** GET /posts/:id */
    async get(id: number) {
        return await db.select().from(postsTable).where(and(eq(postsTable.id, id), isNull(postsTable.deleted_at)))
    },
    /** GET /posts - get all posts */
    async getAll() {
        return await db.select().from(postsTable).where(isNull(postsTable.deleted_at))
    },
    /** POST /posts */
    async create(data: typeof PostSchema.create.static) {
        return await db.insert(postsTable).values(data).returning()
    },
    /** PATCH /posts/:id */
    async update(id: number, data: typeof PostSchema.update.static) {
        return await db.update(postsTable).set(data).where(and(eq(postsTable.id, id), isNull(postsTable.deleted_at))).returning()
    },
    /** DELETE /posts/:id (soft-delete) */
    async delete(id: number) {
        await db.update(postsTable).set({ deleted_at: new Date() }).where(and(eq(postsTable.id, id), isNull(postsTable.deleted_at)))
        return { success: true }
    }
}
