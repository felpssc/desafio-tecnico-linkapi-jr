import { IUser } from "../entities/IUser";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { IParams, IUsersRepository } from "../repositories/IUsersRepository";

class ListUsersUseCase {
    private usersRepository: IUsersRepository;

    constructor() {
        this.usersRepository = new UsersRepository();
    }

    async execute({
        limit = 10,
        page = 1,
        sortBy,
        order,
    }: IParams): Promise<IUser[]> {
        const users = await this.usersRepository.listUsers({
            limit: limit || 10,
            page: page || 1,
            sortBy,
            order
        });

        return users;
    }
}

export { ListUsersUseCase };