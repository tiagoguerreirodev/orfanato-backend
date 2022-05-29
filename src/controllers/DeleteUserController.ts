import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
	async handle(request: Request, response: Response) {
		const id = parseInt(request.params.id);

		const deleteUserService = new DeleteUserService();

		const deletedUser = await deleteUserService.execute(id);

		return response.send(deletedUser);
	}
}
