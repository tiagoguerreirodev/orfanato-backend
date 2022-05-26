import { Router } from "express";
import { CreateOrphanateController } from "./controllers/CreateOrphanateController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/orphanate", new CreateOrphanateController().handle);

router.delete("/users", new DeleteUserController().handle);

export { router };
