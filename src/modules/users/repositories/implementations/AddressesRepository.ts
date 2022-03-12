import { IAddress } from "../../entities/IAddress";
import { IAddressesRepository } from "../IAddressesRepository";
import child_process from "child_process";

class AddressesRepository implements IAddressesRepository {
    async findByUserId(userId: string): Promise<IAddress[]> {
        const worker = child_process.fork("./src/modules/users/workers/getUserAddresses.worker.js");
        const addresses: { addresses: IAddress[] } = await new Promise((resolve) => {
            worker.send({
                userId
            });
                    
            worker.on("message", (message: {
            addresses: IAddress[]
          }) => {
                console.log("mensagem", message);
    
                resolve(message);
            });
        });

        return addresses.addresses;
    }

}

export { AddressesRepository };