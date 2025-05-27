import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import { dirname, resolve, join } from "path";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(resolve(__dirname, "uploads")));

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

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

const publicPath = resolve(__dirname, "public");
app.use(express.static(publicPath));

console.log("public path: ", publicPath);

app.get("/", (req, res) => {
  const filePath = join(__dirname, "public", "index.html");
  console.log(filePath);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("index.html not found");
  }
});

const port = process.env.PORT || 3010;
app.listen(port, () => {
  try {
    console.log(`✅ Server is running on port ${port}`);
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Server start error:", error);
  }
});