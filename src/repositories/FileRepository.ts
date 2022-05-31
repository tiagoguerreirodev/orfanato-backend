import { Image, PrismaClient } from "@prisma/client";
import { IFileDTO, IFileRepository } from "./interfaces/IFileRepository";

const prisma = new PrismaClient();

export class FileRepository implements IFileRepository {
	async upload(data: IFileDTO): Promise<Image> {
		const uploadedImage = await prisma.image.create({
			data,
		});

		return uploadedImage;
	}

	async delete(id: number): Promise<Image> {
		const deletedImage = await prisma.image.delete({
			where: {
				id: id,
			},
		});

		return deletedImage;
	}

	async findByID(id: number): Promise<Image> {
		const foundImage = await prisma.image.findUnique({
			where: {
				id: id,
			},
		});

		return foundImage;
	}
}
