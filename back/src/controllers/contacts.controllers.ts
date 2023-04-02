import { Request, Response } from "express"
import { IContactRequest, IContacts } from "../interfaces/contacts.interfaces"
import createContactService from "../services/contacts/createContacts.service"
import updateContactsService from "../services/contacts/updateContacts.service"
import deleteContactsService from "../services/contacts/deleteContacts.service"
import getContactsService from "../services/contacts/getContacts.service"

export const getContactsController = async (req: Request, res: Response) => {
    const clientId: string = req.reqClient.id!
    
    const contacts = await getContactsService(clientId)

    return res.status(200).json(contacts)
}

export const createContactsController = async (req: Request, res: Response) => {
    const contactsData: IContactRequest = req.body
    const clientId: string = req.reqClient.id!

    const createdContact = await createContactService(contactsData, clientId)

    return res.status(201).json(createdContact)
}

export const updateContactsController = async (req: Request, res: Response) => {
    const contactId: string = req.params.id
    const updateData: Partial<IContactRequest> = req.body

    const updatedContact = await updateContactsService(contactId, updateData)

    return res.status(200).json(updatedContact)
}

export const deleteContactsController = async (req: Request, res: Response) => {
    const contact: IContacts = req.targetContact

    await deleteContactsService(contact)    

    return res.status(204).json()
}