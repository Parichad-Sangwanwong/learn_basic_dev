import { integer, pgTable, timestamp, varchar, text } from "drizzle-orm/pg-core";


const defaultTimestamps = {
 created_at: timestamp().defaultNow(),
 updated_at: timestamp().defaultNow(),
 deleted_at: timestamp(),
};


export const usersTable = pgTable("users", {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 name: varchar({ length: 255 }).notNull(),
 age: integer().notNull(),
 email: varchar({ length: 255 }).notNull().unique(),
 ...defaultTimestamps,
});


export const postsTable = pgTable("posts", {
 id: integer().primaryKey().generatedAlwaysAsIdentity(),
 title: varchar({ length: 255 }).notNull(),
 content: text().notNull(),
 ...defaultTimestamps,
});
