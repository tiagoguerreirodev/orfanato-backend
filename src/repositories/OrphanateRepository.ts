import { Orphanate, PrismaClient } from "@prisma/client";
import {
	ICreateOrphanateDTO,
	IOrphanateRepository,
} from "./interfaces/IOrphanateRepository";

const prisma = new PrismaClient();

export class OrphanateRepository implements IOrphanateRepository {
	async create(data: ICreateOrphanateDTO): Promise<Orphanate> {
		const createdOrphanate = await prisma.orphanate.create({
			data,
		});

		return createdOrphanate;
	}

	async findByName(name: string): Promise<Orphanate | null> {
		const orphanateFound = await prisma.orphanate.findUnique({
			where: { name: name },
		});
		return orphanateFound;
	}

	async delete(name: string): Promise<Orphanate> {
		const deletedOrphanate = await prisma.orphanate.delete({
			where: { name: name },
		});

		return deletedOrphanate;
	}
}
