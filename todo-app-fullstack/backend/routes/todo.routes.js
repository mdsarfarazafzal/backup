import { Router } from "express";
import { syncTodos } from "../controllers/todo.controllers.js";

const router = Router();

router.route("/sync-todos").post(syncTodos);

export default router;
