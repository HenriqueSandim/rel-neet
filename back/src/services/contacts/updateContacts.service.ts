import myDataSource from "../../data-source"
import Contacts from "../../entities/contacts.entity"
import { IContactRequest } from "../../interfaces/contacts.interfaces"
import { contactsToReturnSerializer, updateContactRequestSerializer } from "../../serializers/contacts.serializers"

const updateContactsService = async (contactId: string, updateData: Partial<IContactRequest>) => {
    const contactRepo = myDataSource.getRepository(Contacts)

    const serializedUpdate = await updateContactRequestSerializer.validate(updateData, {
        stripUnknown: true
    })

    const contact = await contactRepo.findOne({
        where: {
            id: contactId
        }
    })

    const updatedContact = {
        ...contact,
        ...serializedUpdate
    }

    await contactRepo.save(updatedContact as Object)

    const updatedReturn = await contactsToReturnSerializer.validate(updatedContact, {
        stripUnknown: true
    })

    return updatedReturn
}

export default updateContactsService