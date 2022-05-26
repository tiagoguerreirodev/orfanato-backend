import { Prisma, PrismaClient } from "@prisma/client";
import { OrphanateRepository } from "../repositories/OrphanateRepository";

interface ICreateOrphanateRequest {
	name: string;
	latitude?: Prisma.Decimal;
	longitude?: Prisma.Decimal;
	about: string;
	opening_time?: string;
	open_on_weekends: boolean;
	whatsapp: string;
}

export class CreateOrphanateService {
	async execute({
		name,
		latitude,
		longitude,
		about,
		opening_time,
		open_on_weekends,
		whatsapp,
	}: ICreateOrphanateRequest) {
		const orphanateRepository = new OrphanateRepository();

		if (!name) {
			throw new Error("Name is blank.");
		}

		const orphanateAlreadyExists = await orphanateRepository.findByName(name);

		if (orphanateAlreadyExists) {
			throw new Error("Orphanate already exists.");
		}

		const createdOrphanate = await orphanateRepository.create({
			name,
			latitude,
			longitude,
			about,
			opening_time,
			open_on_weekends,
			whatsapp,
		});

		return createdOrphanate;
	}
}
