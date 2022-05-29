import { Request, Response } from "express";
import { DeleteOrphanageService } from "../services/DeleteOrphanageService";

export class DeleteOrphanageController {
	async handle(request: Request, response: Response) {
		const id = parseInt(request.params.id);

		const deleteOrphanageService = new DeleteOrphanageService();

		const deletedOrphanage = await deleteOrphanageService.execute(id);

		return response.status(204).send();
	}
}
