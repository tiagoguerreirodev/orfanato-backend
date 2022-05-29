import { UsersRepository } from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserRequest {
	email: string;
	password: string;
}

export class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateUserRequest) {
		const usersRepository = new UsersRepository();

		if (!email || !password) {
			throw new Error("No email or password.");
		}

		const user = await usersRepository.findByEmail(email);

		if (!user) {
			throw new Error("User does not exist.");
		}

		const match = await compare(password, user.password);

		if (!match) {
			throw new Error("Incorrect password.");
		}

		const token = sign(
			{
				email: user.email,
			},
			process.env.JWT_SECRET as string,
			{
				subject: user.id.toString(),
				expiresIn: 86400,
			}
		);

		return token;
	}
}
