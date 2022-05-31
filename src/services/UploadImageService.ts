import { FileRepository } from "../repositories/FileRepository";
import { OrphanageRepository } from "../repositories/OrphanageRepository";

interface IUploadImageRequest {
	orphanageID: number;
	filename: string;
	path: string;
}

export class UploadImageService {
	async execute({ orphanageID, filename: name, path }: IUploadImageRequest) {
		const fileRepository = new FileRepository();
		const orphanageRepository = new OrphanageRepository();

		if (!name || !path) {
			throw new Error("Filename or Path missing from request.");
		}

		const uploadImage = await fileRepository.upload({ name, path });

		const updatedOrphanage = await orphanageRepository.updateImage(
			uploadImage.id,
			orphanageID
		);

		return uploadImage;
	}
}
