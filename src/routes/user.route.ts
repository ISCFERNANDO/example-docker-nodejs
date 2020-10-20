import { Router } from "express";
import { UserController } from "../controllers/user.controller";
const controller = new UserController();

const router = Router();
router.get("/", controller.getAllUsers);
router.get("/:id", controller.getOneUser);
router.post("/", controller.addUser);
router.put("/", controller.updateUser);
router.delete("/", controller.deleteUser);

export default router;
