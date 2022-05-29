import { Prisma, PrismaClient } from "@prisma/client";
import { OrphanageRepository } from "../repositories/OrphanageRepository";

interface ICreateOrphanageRequest {
	name: string;
	latitude: number;
	longitude: number;
	about: string;
	approved: boolean;
	opening_hours: string;
	closing_hours: string;
	open_on_weekends: boolean;
	whatsapp: string;
}

export class CreateOrphanageService {
	async execute({
		name,
		latitude,
		longitude,
		about,
		approved,
		opening_hours,
		closing_hours,
		open_on_weekends,
		whatsapp,
	}: ICreateOrphanageRequest) {
		const orphanageRepository = new OrphanageRepository();

		if (!name) {
			throw new Error("Name is blank.");
		}

		const orphanageAlreadyExists = await orphanageRepository.findByName(name);

		if (orphanageAlreadyExists) {
			throw new Error("Orphanage already exists.");
		}

		const createdOrphanage = await orphanageRepository.create({
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

		return createdOrphanage;
	}
}
