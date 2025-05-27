import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { usersTable } from "../db/schema.js";
import bcrypt from "bcryptjs";
import { createJWT } from "../utillis/token.js";

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;

    if (!name || !email || !contact || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const formattedEmail = email.toLowerCase();
    const user = await db
      .insert(usersTable)
      .values({
        name,
        email: formattedEmail,
        contact,
        password: hashedPassword,
      })
      .returning();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
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

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const formattedEmail = email.toLowerCase();

    const userResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, formattedEmail));

    if (userResult.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const user = userResult[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = createJWT({ userId: user.id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(Date.now() + oneDay),
    });

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
      })
      .status(200)
      .json({
        success: true,
        message: "Logged out",
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
