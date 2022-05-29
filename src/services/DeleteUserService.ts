import { UsersRepository } from "../repositories/UsersRepository";

export class DeleteUserService {
	async execute(id: number) {
		const usersRepository = new UsersRepository();

		if (!id) {
			throw new Error("ID not specified. Cannot locate user.");
		}

		const userExists = await usersRepository.findByID(id);

		if (!userExists) {
			throw new Error("User does not exist.");
		}

		const deletedUser = await usersRepository.delete(id);

		return deletedUser;
	}
}
