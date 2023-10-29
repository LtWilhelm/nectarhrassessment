import { Router } from "express";
import { fibonacciGetController } from "../controllers/fibonacci";

const router = Router();

router.get("/", fibonacciGetController);

export default router;
