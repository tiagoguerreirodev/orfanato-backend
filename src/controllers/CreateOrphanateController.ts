import { Request, Response } from "express";
import { CreateOrphanateService } from "../services/CreateOrphanateService";

export class CreateOrphanateController {
	async handle(request: Request, response: Response) {
		const {
			name,
			latitude,
			longitude,
			about,
			opening_time,
			open_on_weekends,
			whatsapp,
		} = request.body;

		const createOrphanateService = new CreateOrphanateService();

		const createdOrphanate = await createOrphanateService.execute({
			name,
			latitude,
			longitude,
			about,
			opening_time,
			open_on_weekends,
			whatsapp,
		});

		return response.send();
	}
}
