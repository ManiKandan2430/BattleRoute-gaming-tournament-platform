import { verifyJWT } from "../utillis/token.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Login to access this page",
      });
    }

    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};
