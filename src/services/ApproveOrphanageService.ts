import { OrphanageRepository } from "../repositories/OrphanageRepository";

export class ApproveOrphanageService {
	async execute(id: number) {
		const orphanageRepository = new OrphanageRepository();

		if (!id) {
			throw new Error("ID not specified. Cannot locate orphanage.");
		}

		const orphanageAlreadyApproved = await orphanageRepository
			.findByID(id)
			.then((obj) => obj?.approved);

		if (orphanageAlreadyApproved) {
			throw new Error("Orphanage already approved.");
		}

		const approvedOrphanage = await orphanageRepository.approveOrphanage(id);

		return approvedOrphanage;
	}
}
