import { UsersRepository } from "../repositories/UsersRepository";

export class DeleteUserService {
	async execute(email: string) {
		const usersRepository = new UsersRepository();

		if (!email) {
			throw new Error("Incorrect email.");
		}

		const userExists = await usersRepository.findByEmail(email);

		if (!userExists) {
			throw new Error("User does not exist.");
		}

		const deletedUser = await usersRepository.delete(email);

		return deletedUser;
	}
}
