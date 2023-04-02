import myDataSource from "../../data-source"
import Contacts from "../../entities/contacts.entity"
import { arrContactsToReturnSerializer } from "../../serializers/contacts.serializers"

const getContactsService = async (clientId: string) => {
    const contactRepo = myDataSource.getRepository(Contacts)

    const arrayContacts = await contactRepo.find({
        where: {
            client: clientId
        }
    })

    const serializedContactArray = await arrContactsToReturnSerializer.validate(arrayContacts, {
        stripUnknown: true
    })

    return serializedContactArray
}

export default getContactsService