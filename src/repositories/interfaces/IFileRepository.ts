import { Image } from "@prisma/client";

export interface IFileDTO {
	name: string;
	path: string;
}

export interface IFileRepository {
	upload(data: IFileDTO): Promise<Image>;
	delete(id: number): Promise<Image>;
	findByID(id: number): Promise<Image>;
}
