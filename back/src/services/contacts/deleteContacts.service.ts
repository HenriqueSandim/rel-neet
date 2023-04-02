import myDataSource from "../../data-source"

import Contacts from "../../entities/contacts.entity"
import { IContacts } from "../../interfaces/contacts.interfaces"

const deleteContactsService = async (contact: IContacts): Promise<void> => {
    const contactRepo = myDataSource.getRepository(Contacts)

    await contactRepo.delete({id: contact.id})
}

export default deleteContactsService