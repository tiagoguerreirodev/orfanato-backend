import { Request, Response } from "express";
import { ApproveOrphanageService } from "../services/ApproveOrphanageService";

export class ApproveOrphanageController {
	async handle(request: Request, response: Response) {
		const id = parseInt(request.params.id);
		const approveOrphanageService = new ApproveOrphanageService();

		const approvedOrphanage = await approveOrphanageService.execute(id);

		return response.status(201).send({ approvedOrphanage });
	}
}
