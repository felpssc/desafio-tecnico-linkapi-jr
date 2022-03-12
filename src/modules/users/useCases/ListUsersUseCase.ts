import { IUser } from "../entities/IUser";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { IParams, IUsersRepository } from "../repositories/IUsersRepository";
import { AddressesRepository } from "../repositories/implementations/AddressesRepository";
import { IAddressesRepository } from "../repositories/IAddressesRepository";

class ListUsersUseCase {
    private usersRepository: IUsersRepository;
    private addressesRepository: IAddressesRepository;

    constructor() {
        this.usersRepository = new UsersRepository();
        this.addressesRepository = new AddressesRepository();
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

        for(const user of users) {
            
            const addresses = await this.addressesRepository.findByUserId(user.id);
            user.addresses = addresses;

        }

        return users;
    }
}

export { ListUsersUseCase };