import { Orphanage, Prisma } from "@prisma/client";

export interface ICreateOrphanageDTO {
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

export interface IOrphanageRepository {
	create(data: ICreateOrphanageDTO): Promise<Orphanage>;
	findByName(name: string): Promise<Orphanage | null>;
	findByID(id: number): Promise<Orphanage | null>;
	getAllApprovedOrphanages(): Promise<Orphanage[] | null>;
	getAllPendingOrphanages(): Promise<Orphanage[] | null>;
	approveOrphanage(id: number): Promise<Orphanage>;
	delete(id: number): Promise<Orphanage>;
}
