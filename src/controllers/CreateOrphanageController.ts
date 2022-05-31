import { Request, Response } from "express";
import { CreateOrphanageService } from "../services/CreateOrphanageService";

export class CreateOrphanageController {
	async handle(request: Request, response: Response) {
		const {
			name,
			latitude,
			longitude,
			about,
			approved,
			opening_hours,
			closing_hours,
			open_on_weekends,
			whatsapp,
		} = request.body;

		const createOrphanageService = new CreateOrphanageService();

		const createdOrphanage = await createOrphanageService.execute({
			name,
			latitude,
			longitude,
			about,
			approved,
			opening_hours,
			closing_hours,
			open_on_weekends,
			whatsapp,
		});

		return response
			.status(201)
			.json({ orphanage: createdOrphanage, file: request.file });
	}
}
