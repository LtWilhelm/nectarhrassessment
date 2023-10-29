import { Router } from "express";
import { fibonacciGetController } from "../controllers/fibonacci";
import { QOTDMiddleware } from "../middleware/qotd";

const router = Router();

router.get("/", QOTDMiddleware, fibonacciGetController);

export default router;
