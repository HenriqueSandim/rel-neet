import * as yup from "yup"
import { Schema } from "yup";

import { IContactRequest, IContacts } from "../interfaces/contacts.interfaces";

export const contactRequestSerializer: Schema<IContactRequest> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    description: yup.string().notRequired()
})

export const updateContactRequestSerializer: Schema<Partial<IContactRequest>> = yup.object().shape({
    fullName: yup.string().optional(),
    email: yup.string().email().optional(),
    phoneNumber: yup.string().optional(),
    description: yup.string().optional()
})

export const contactsToReturnSerializer: Schema<IContacts> = yup.object().shape({
    id: yup.string().required(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    description: yup.string().notRequired(),
    createdAt: yup.date().required(),
    client: yup.string().required(),
})

export const arrContactsToReturnSerializer: Schema<IContacts[] | undefined> = yup.array().of(contactsToReturnSerializer)
