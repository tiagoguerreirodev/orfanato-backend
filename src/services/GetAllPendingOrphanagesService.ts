import { OrphanageRepository } from "../repositories/OrphanageRepository";

export class GetAllPendingOrphanagesService {
	async execute() {
		const orphanageRepository = new OrphanageRepository();

		const pendingOrphanages =
			await orphanageRepository.getAllPendingOrphanages();

		return pendingOrphanages;
	}
}
