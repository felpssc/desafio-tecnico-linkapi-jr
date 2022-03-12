import { IAddress } from "./IAddress";
import { IContact } from "./IContact";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  createdAt: Date;
  fullName: string;
  addresses: IAddress[];
  contacts: IContact[];
}

export { IUser };