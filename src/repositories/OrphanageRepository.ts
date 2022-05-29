import { Orphanage, PrismaClient } from "@prisma/client";
import {
	ICreateOrphanageDTO,
	IOrphanageRepository,
} from "./interfaces/IOrphanateRepository";

const prisma = new PrismaClient();

export class OrphanageRepository implements IOrphanageRepository {
	async create(data: ICreateOrphanageDTO): Promise<Orphanage> {
		const createdOrphanage = await prisma.orphanage.create({
			data,
		});

		return createdOrphanage;
	}

	async findByName(name: string): Promise<Orphanage | null> {
		const orphanageFound = await prisma.orphanage.findUnique({
			where: { name: name },
		});
		return orphanageFound;
	}

	async findByID(id: number): Promise<Orphanage | null> {
		const orphanageFound = await prisma.orphanage.findUnique({
			where: { id: id },
		});

		return orphanageFound;
	}

	async delete(id: number): Promise<Orphanage> {
		const deletedOrphanage = await prisma.orphanage.delete({
			where: { id: id },
		});

		return deletedOrphanage;
	}

	async getAllApprovedOrphanages(): Promise<Orphanage[] | null> {
		const approvedOrphanages = await prisma.orphanage.findMany({
			where: {
				approved: true,
			},
		});

		return approvedOrphanages;
	}
	async getAllPendingOrphanages(): Promise<Orphanage[] | null> {
		const pendingOrphanages = await prisma.orphanage.findMany({
			where: {
				approved: false,
			},
		});

		return pendingOrphanages;
	}

	async approveOrphanage(id: number): Promise<Orphanage> {
		const approvedOrphanage = await prisma.orphanage.update({
			where: {
				id: id,
			},
			data: {
				approved: true,
			},
		});
		return approvedOrphanage;
	}
}
