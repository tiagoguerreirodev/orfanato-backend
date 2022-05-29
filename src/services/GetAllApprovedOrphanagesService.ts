import { OrphanageRepository } from "../repositories/OrphanageRepository";

export class GetAllApprovedOrphanagesService {
	async execute() {
		const orphanageRepository = new OrphanageRepository();

		const approvedOrphanages =
			await orphanageRepository.getAllApprovedOrphanages();

		return approvedOrphanages;
	}
}
