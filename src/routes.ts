import { Request, Response, Router } from "express";
import multer from "multer";
import { multerConfig } from "./config/multer";

import { ApproveOrphanageController } from "./controllers/ApproveOrphanageController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateOrphanageController } from "./controllers/CreateOrphanageController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteOrphanageController } from "./controllers/DeleteOrphanageController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllApprovedOrphanagesController } from "./controllers/GetAllApprovedOrphanagesController";
import { GetAllPendingOrphanagesController } from "./controllers/GetAllPendingOrphanagesController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";

export const router = Router();

router.post("/user", ensureAuthentication, new CreateUserController().handle);
router.post(
	"/orphanage",
	ensureAuthentication,
	new CreateOrphanageController().handle
);
router.put(
	"/image/:orphanageID",
	// ensureAuthentication,
	multer(multerConfig).single("file")
);
router.post("/login", new AuthenticateUserController().handle);

router.get(
	"/orphanage/approved",
	ensureAuthentication,
	new GetAllApprovedOrphanagesController().handle
);
router.get(
	"/orphanage/pending",
	ensureAuthentication,
	new GetAllPendingOrphanagesController().handle
);

router.put(
	"/orphanage/:id",
	ensureAuthentication,
	new ApproveOrphanageController().handle
);

router.delete(
	"/user/:id",
	ensureAuthentication,
	new DeleteUserController().handle
);
router.delete(
	"/orphanage/:id",
	ensureAuthentication,
	new DeleteOrphanageController().handle
);
