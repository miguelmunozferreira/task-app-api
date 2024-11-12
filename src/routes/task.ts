import { Router } from "express";
import { addTask, getTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export { router };
