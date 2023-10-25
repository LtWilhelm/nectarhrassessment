import { Router } from "express";
import { reversePostController } from "../controllers/reverse";

const router = Router();

router.post("/", reversePostController);

export default router;
