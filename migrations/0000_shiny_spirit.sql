CREATE TYPE "public"."userRole" AS ENUM('users', 'admin');--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"contact" integer NOT NULL,
	"password" text NOT NULL,
	"userRole" "userRole" DEFAULT 'users',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
