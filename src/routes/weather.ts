import { Router } from "express";
import { weatherGetController } from "../controllers/weather";

const router = Router();

router.get("/:state", weatherGetController);

export default router;
