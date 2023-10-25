import { Router } from "express";
import reverse from "./reverse";
const router = Router();

router.use("/reverse", reverse);

export default router;
