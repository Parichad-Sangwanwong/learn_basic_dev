import { db } from '../../db/index'          // the drizzle instance
import { usersTable, postsTable } from '../../db/schema'
import { eq, and, isNull } from 'drizzle-orm'
import { UserSchema } from './model'
export const UserService = {
    /** GET /users/:id */
    async get(id: number) {
        return await db.select().from(usersTable).where(and(eq(usersTable.id, id), isNull(postsTable.deleted_at)))
    },
    /** POST /users */
    async create(data: typeof UserSchema.create.static) {
        return await db.insert(usersTable).values(data).returning()
    },
    /** PATCH /users/:id */
    async update(id: number, data: typeof UserSchema.update.static) {
        return await db.update(usersTable).set(data).where(and(eq(usersTable.id, id), isNull(postsTable.deleted_at))).returning()
    },
    /** DELETE /users/:id (soft‑delete) */
    async delete(id: number) {
        await db.update(usersTable).set({ deleted_at: new Date() }).where(and(eq(usersTable.id, id), isNull(postsTable.deleted_at)))
        return { success: true }
    }
}
