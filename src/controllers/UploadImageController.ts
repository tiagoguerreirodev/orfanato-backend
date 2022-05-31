import { Request, Response } from "express";
import { UploadImageService } from "../services/UploadImageService";

export class UploadImageController {
	async handle(request: Request, response: Response) {
		const orphanageID = parseInt(request.params.orphanageID);
		const { filename, path } = request.body;

		const uploadImageService = new UploadImageService();

		const uploadedImage = await uploadImageService.execute({
			orphanageID,
			filename,
			path,
		});

		return response.status(201).send(uploadedImage);
	}
}
