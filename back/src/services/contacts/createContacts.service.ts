import myDataSource from "../../data-source"
import Contacts from "../../entities/contacts.entity"
import AppError from "../../errors/appError"
import { IContactRequest } from "../../interfaces/contacts.interfaces"
import { contactRequestSerializer, contactsToReturnSerializer } from "../../serializers/contacts.serializers"

const createContactService = async (contactData: IContactRequest, clientId: string) => {
    const contactRepo = myDataSource.getRepository(Contacts)

    const serializedContact = await contactRequestSerializer.validate(contactData, {
        stripUnknown: true,
        abortEarly: false
    })
    .catch(err => {
        throw new AppError(404, err.errors)
    })

    const createdContact = contactRepo.create(
        {
            ...serializedContact, 
            client: clientId
        } as Object
    )

    await contactRepo.save(createdContact)

    const contactToReturn = await contactsToReturnSerializer.validate(createdContact, {
        stripUnknown: true
    })

    return contactToReturn
}

export default createContactService