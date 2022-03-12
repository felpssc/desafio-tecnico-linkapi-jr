import { IUser } from "../entities/IUser";

interface IParams {
  limit?: number;
  page?: number;
  sortBy?: string;
  order?: string;
}

interface IUsersRepository {
  listUsers({
      limit,
      page,
      order,
      sortBy
  }: IParams): Promise<IUser[]>;
}

export { IUsersRepository, IParams };