import express from "express";
import { getCurrentUser, updateUser } from "../controller/user.Controller.js";
import { isAuthenticated } from "../middlewares/auth.Middleware.js";
import upload from "../middlewares/multerMiddleware.js";

const router = express.Router();

router.use(isAuthenticated);
router.get("/current-user", getCurrentUser);
router.put("/update-user/:id", upload.single("avatar"), updateUser);

export default router;
