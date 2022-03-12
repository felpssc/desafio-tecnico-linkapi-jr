import { IAddress } from "./IAddress";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  createdAt: Date;
  addresses: IAddress[];
}

export { IUser };