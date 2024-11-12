import { Router } from "express";
import { getUsersCtrl } from "../controllers/user.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", checkJwt, getUsersCtrl);

export { router };
