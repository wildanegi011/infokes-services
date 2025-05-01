import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  AnyPgColumn,
  unique,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const folderItems = pgTable(
  "folder_items",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    parentId: integer("parent_id").references(
      (): AnyPgColumn => folderItems.id,
      { onDelete: "cascade" }
    ),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (t) => [uniqueIndex("name_parent_idx").on(t.name, t.parentId)]
);
