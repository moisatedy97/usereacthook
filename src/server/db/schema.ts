// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `${name}`);

export const hooks = createTable(
  "hooks",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    description: varchar("description", { length: 1024 }),
    source: varchar("source", { length: 1024 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const hooksRelations = relations(hooks, ({ one }) => ({
  hooksStatistics: one(hooksStatistics, {
    fields: [hooks.id],
    references: [hooksStatistics.hookId],
  }),
}));

export const hooksStatistics = createTable("hooks_statistics", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  hookId: bigint("hook_id", { mode: "number" }).references(() => hooks.id),
  clickCount: bigint("click_count", { mode: "number" }).default(0),
  copyCount: bigint("copy_count", { mode: "number" }).default(0),
  usefullCount: bigint("usefull_count", { mode: "number" }).default(0),
  uselessCount: bigint("useless_count", { mode: "number" }).default(0),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type Hook = typeof hooks.$inferSelect;
export type HookInsert = typeof hooks.$inferInsert;
export type HookStatistics = typeof hooksStatistics.$inferSelect;
export type HooksStatisticsInsert = typeof hooksStatistics.$inferInsert;
