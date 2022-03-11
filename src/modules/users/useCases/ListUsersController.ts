import { Request, Response } from "express";
import { IParams } from "../repositories/IUsersRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    async handle(request: Request, response: Response) {
        const { limit, page, sortBy, order }: IParams = request.query;

        const listUsersUseCase = new ListUsersUseCase();
        
        const users = await listUsersUseCase.execute({
            limit,
            page,
            sortBy,
            order,
        });

        return response.json(users);
    
    }
}

export { ListUsersController };