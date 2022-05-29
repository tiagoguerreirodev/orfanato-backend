import { Router } from "express";
import { ApproveOrphanageController } from "./controllers/ApproveOrphanageController";

import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllApprovedOrphanagesController } from "./controllers/GetAllApprovedOrphanagesController";
import { GetAllPendingOrphanagesController } from "./controllers/GetAllApprovedOrphanagesController copy";

const router = Router();

// router.post("/users",new CreateUserController().handle);
router.post("/orphanage", new CreateOrphanageController().handle); //TODO: somente usuários logados.

router.get(
	"/orphanage/approved",
	new GetAllApprovedOrphanagesController().handle
); //TODO: somente usuários logados.
router.get(
	"/orphanage/pending",
	new GetAllPendingOrphanagesController().handle
); //TODO: somente usuários logados.

router.put("/approve/:id", new ApproveOrphanageController().handle);

router.delete("/users", new DeleteUserController().handle); //TODO: somente usuários logados.

export { router };
