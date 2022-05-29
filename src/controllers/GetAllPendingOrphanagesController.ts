import { Request, Response } from "express";
import { GetAllPendingOrphanagesService } from "../services/GetAllPendingOrphanagesService";

export class GetAllPendingOrphanagesController {
	async handle(request: Request, response: Response) {
		const getAllPendingOrphanagesService = new GetAllPendingOrphanagesService();

		const pendingOrphanages = await getAllPendingOrphanagesService.execute();

		return response.send(pendingOrphanages);
	}
}
