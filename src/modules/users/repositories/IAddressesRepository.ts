import { IAddress } from "../entities/IAddress";

interface IAddressesRepository {
  findByUserId(userId: string): Promise<IAddress[]>;
}

export { IAddressesRepository };