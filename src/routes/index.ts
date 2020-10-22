import { Router } from "express";
import userRoutes from "./user.route";
import accessRoutes from "./access.route";

const router = Router();
router.use("/users", userRoutes);
router.use("/access", accessRoutes);

export default router;
