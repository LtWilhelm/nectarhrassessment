import { Router } from "express";
import reverse from "./reverse";
import weather from "./weather";
const router = Router();

router.use("/reverse", reverse);
router.use("/weather", weather);

export default router;
