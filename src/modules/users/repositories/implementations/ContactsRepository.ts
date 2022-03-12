import { IContact } from "../../entities/IContact";
import { IContactsRepository } from "../IContactsRepository";
import child_process from "child_process";

class ContactsRepository implements IContactsRepository {
    async findByUserId(userId: string): Promise<IContact[]> {
        const worker = child_process.fork("./src/modules/users/workers/getUserContacts.worker.js");
        const { contacts }: { contacts: IContact[] } = await new Promise((resolve) => {
            worker.send({
                userId
            });
                    
            worker.on("message", (message: { contacts: IContact[] }) => {    
                resolve(message);
            });
        });

        return contacts;
    }
}

export { ContactsRepository };