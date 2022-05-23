import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.delete("/users", new DeleteUserController().handle);

export { router };
