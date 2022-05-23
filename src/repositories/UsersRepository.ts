import { PrismaClient, User } from "@prisma/client";
import { ICreateUserDTO, IUsersRepository } from "./interfaces/IUserRepository";

const prisma = new PrismaClient();

export class UsersRepository implements IUsersRepository {
	async create(data: ICreateUserDTO): Promise<User> {
		const createdUser = await prisma.user.create({
			data,
		});

		return createdUser;
	}

	async delete(email: string): Promise<User> {
		const deletedUser = await prisma.user.delete({
			where: { email: email },
		});

		return deletedUser;
	}

	async findByEmail(email: string): Promise<User | null> {
		const userFound = await prisma.user.findUnique({
			where: { email: email },
		});

		return userFound;
	}
}
