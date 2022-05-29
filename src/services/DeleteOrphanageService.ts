import { OrphanageRepository } from "../repositories/OrphanageRepository";

export class DeleteOrphanageService {
	async execute(id: number) {
		const orphanageRepository = new OrphanageRepository();

		if (!id) {
			throw new Error("ID not specified. Cannot locate orphanage.");
		}

		const orphanageExists = await orphanageRepository.findByID(id);

		if (!orphanageExists) {
			throw new Error("Orphanage does not exist.");
		}

		const deletedOrphanage = await orphanageRepository.delete(id);

		return deletedOrphanage;
	}
}
