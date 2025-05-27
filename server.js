import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const _dirname = dirname(fileURLToPath(import.meta.url));
app.use("/uploads", express.static(path.resolve(_dirname, "./uploads")));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

const port = process.env.PORT || 3010;

app.listen(port, () => {
  try {
    console.log(`server is running port on ${port}`);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
});
