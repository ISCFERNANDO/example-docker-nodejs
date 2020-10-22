import { AccessServiceImpl } from "./../services/implementation/access-impl.service";
import { Router } from "express";
import { AccessController } from "../controllers/access.controller";

const service = new AccessServiceImpl();
const controller = new AccessController(service);
const router = Router();
router.get("/", (req, res) => controller.getAllAccess(req, res));
router.get("/:id", (req, res) => controller.getOneAccess(req, res));
router.post("/", (req, res) => controller.addAccess(req, res));
router.put("/", (req, res) => controller.updateAccess(req, res));
router.delete("/", (req, res) => controller.deleteAccess(req, res));

export default router;
