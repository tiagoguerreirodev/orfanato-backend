import { Router } from "express";

import { ApproveOrphanageController } from "./controllers/ApproveOrphanageController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteOrphanageController } from "./controllers/DeleteOrphanageController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllApprovedOrphanagesController } from "./controllers/GetAllApprovedOrphanagesController";
import { GetAllPendingOrphanagesController } from "./controllers/GetAllPendingOrphanagesController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";

const router = Router();

router.post("/user", ensureAuthentication, new CreateUserController().handle); //TODO: somente usuários logados.
router.post(
	"/orphanage",
	ensureAuthentication,
	new CreateOrphanageController().handle
); //TODO: somente usuários logados.
router.post(
	"/login",
	ensureAuthentication,
	new AuthenticateUserController().handle
); //TODO: somente usuários logados.

router.get(
	"/orphanage/approved",
	ensureAuthentication,
	new GetAllApprovedOrphanagesController().handle
); //TODO: somente usuários logados.
router.get(
	"/orphanage/pending",
	ensureAuthentication,
	new GetAllPendingOrphanagesController().handle
); //TODO: somente usuários logados.

router.put(
	"/orphanage/:id",
	ensureAuthentication,
	new ApproveOrphanageController().handle
); //TODO: somente usuários logados.

router.delete(
	"/user/:id",
	ensureAuthentication,
	new DeleteUserController().handle
); //TODO: somente usuários logados.
router.delete(
	"/orphanage/:id",
	ensureAuthentication,
	new DeleteOrphanageController().handle
); //TODO: somente usuários logados.

export { router };
