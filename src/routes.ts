import { Router } from "express";

import { ApproveOrphanageController } from "./controllers/ApproveOrphanageController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteOrphanageController } from "./controllers/DeleteOrphanageController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllApprovedOrphanagesController } from "./controllers/GetAllApprovedOrphanagesController";
import { GetAllPendingOrphanagesController } from "./controllers/GetAllPendingOrphanagesController";

const router = Router();

router.post("/user", new CreateUserController().handle); //TODO: somente usuários logados.
router.post("/orphanage", new CreateOrphanageController().handle); //TODO: somente usuários logados.

router.get(
	"/orphanage/approved",
	new GetAllApprovedOrphanagesController().handle
); //TODO: somente usuários logados.
router.get(
	"/orphanage/pending",
	new GetAllPendingOrphanagesController().handle
); //TODO: somente usuários logados.

router.put("/orphanage/:id", new ApproveOrphanageController().handle); //TODO: somente usuários logados.

router.delete("/user/:id", new DeleteUserController().handle); //TODO: somente usuários logados.
router.delete("/orphanage/:id", new DeleteOrphanageController().handle); //TODO: somente usuários logados.

export { router };
