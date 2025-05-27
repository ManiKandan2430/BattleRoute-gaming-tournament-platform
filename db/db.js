import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from './schema.js'
import dotenv from "dotenv";

dotenv.config();

const postgres = neon(process.env.POSTGRES_URL);
export const db = drizzle(postgres,{schema});
