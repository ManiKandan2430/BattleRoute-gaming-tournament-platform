import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const userRole = pgEnum("userRole", ["users", "admin"]);

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  contact: integer("contact").notNull(),
  password: text("password").notNull(),
  avatar: text("avatar"),
  role: userRole("userRole").default("users"),
  playerID: text("playerID"),
  ingamename: varchar("ingamename", { length: 255 }),
  country: varchar("country", { length: 255 }),
  region: varchar("region", { length: 255 }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});
