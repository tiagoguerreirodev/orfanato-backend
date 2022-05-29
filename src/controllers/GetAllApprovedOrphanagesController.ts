import { Request, Response } from "express";
import { GetAllApprovedOrphanagesService } from "../services/GetAllApprovedOrphanagesService";

export class GetAllApprovedOrphanagesController {
	async handle(request: Request, response: Response) {
		const getAllApprovedOrphanagesService =
			new GetAllApprovedOrphanagesService();

		const approvedOrphanages = await getAllApprovedOrphanagesService.execute();

		return response.send({ approvedOrphanages });
	}
}
