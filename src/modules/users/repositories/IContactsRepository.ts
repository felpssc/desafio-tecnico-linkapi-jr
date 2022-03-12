import { IContact } from "../entities/IContact";

interface IContactsRepository {
  findByUserId(userId: string): Promise<IContact[]>;
}

export { IContactsRepository };