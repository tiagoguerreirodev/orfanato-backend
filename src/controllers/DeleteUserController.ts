import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
	async handle(request: Request, response: Response) {
		const { email } = request.body;

		const deleteUserService = new DeleteUserService();

		await deleteUserService.execute(email);

		return response.send();
	}
}
