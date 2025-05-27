import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { usersTable } from "../db/schema.js";
import { v2 as cloudinary } from "cloudinary";
import path from 'path'
import { formatImage } from "../middlewares/multerMiddleware.js";


export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const userResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, req.user.userId));

    if (userResult.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const { password, ...user } = userResult[0];

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, ingamename, playerID, country, region } =
      req.body;

    if (
      !name ||
      !email ||
      !contact ||
      !ingamename ||
      !playerID ||
      !country ||
      !region
    ) {
      return res.status(400).json({
        success: false,
        message: "Fill all required fields",
      });
    }

    let avatarUrl;

    // Upload to Cloudinary if file is provided
    if (req.file) {
      const file64 = formatImage(req.file); // convert buffer to base64
      const uploadResult = await cloudinary.uploader.upload(file64, {
        folder: "avatars",
      });
      avatarUrl = uploadResult.secure_url;
    }

    const updatedUser = await db
      .update(usersTable)
      .set({
        name,
        email,
        contact,
        ingamename,
        playerID,
        country,
        region,
        ...(avatarUrl && { avatar: avatarUrl }), // only set avatar if uploaded
      })
      .where(eq(usersTable.id, Number(id)))
      .returning();

    if (updatedUser.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};