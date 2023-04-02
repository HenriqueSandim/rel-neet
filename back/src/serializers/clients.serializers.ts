import * as yup from "yup"
import { Schema } from "yup"
import Contacts from "../entities/contacts.entity"

import { IClient, IClientRequest } from "../interfaces/clients.interfaces"
import { contactsToReturnSerializer } from "./contacts.serializers"

export const clientRequestSerializer: Schema<IClientRequest> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phoneNumber: yup.string().required(),
    description: yup.string().notRequired()
})

export const clientToReturnSerializer: Schema<IClient> = yup.object().shape({
    id: yup.string().required(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    description: yup.string().notRequired(),
    contacts: yup.array().of(contactsToReturnSerializer).notRequired(),
    createdAt: yup.date().required(),
})

export const clientUpdateSerializer: Schema<Partial<IClientRequest>> = yup.object().shape({
    fullName: yup.string().optional(),
    email: yup.string().email().optional(),
    password: yup.string().optional(),
    phoneNumber: yup.string().optional(),
    description: yup.string().notRequired()
})

