import { AccessServiceImpl } from "./../services/implementation/access-impl.service";
import { Router } from "express";
import { AccessController } from "../controllers/access.controller";

const service = new AccessServiceImpl();
const controller = new AccessController(service);
const router = Router();
router.get("/", (req, res, next) => controller.getAllAccess(req, res, next));
router.get("/:id", (req, res, next) => controller.getOneAccess(req, res, next));
router.post("/", (req, res, next) => controller.addAccess(req, res, next));
router.delete("/:id", (req, res, next) =>
  controller.deleteAccess(req, res, next)
);
router.put("/:id", (req, res, next) => controller.updateAccess(req, res, next));

export default router;
