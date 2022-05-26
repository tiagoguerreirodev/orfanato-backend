import { Orphanate, Prisma } from "@prisma/client";

export interface ICreateOrphanateDTO {
	name: string;
	latitude?: Prisma.Decimal;
	longitude?: Prisma.Decimal;
	about: string;
	opening_time?: string;
	open_on_weekends: boolean;
	whatsapp: string;
}

export interface IOrphanateRepository {
	create(data: ICreateOrphanateDTO): Promise<Orphanate>;
	findByName(name: string): Promise<Orphanate | null>;
	delete(name: string): Promise<Orphanate>;
}
