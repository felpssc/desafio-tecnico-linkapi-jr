import { IUser } from "../../entities/IUser";
import { IParams, IUsersRepository } from "../IUsersRepository";

import { api } from "../../../../axios";

class UsersRepository implements IUsersRepository {
    async listUsers({ limit, page, order, sortBy }: IParams): Promise<IUser[]> {

        const params: IParams = {};

        if (limit) params.limit = limit;

        if (page) params.page = page;

        if (order) params.order = order;

        if (sortBy) params.sortBy = sortBy;

        const users = await api.get("users", {
            params: {
                limit,
                page,
                order,
                sortBy
            }
        });

        return users.data;
    }

}

export { UsersRepository };