import * as express from "express"
import Clients from "../../entities/clients.entity"
import { IClient } from "../../interfaces/clients.interfaces"
import { IContacts } from "../../interfaces/contacts.interfaces"

declare global {
    namespace Express {
        interface Request {
            reqClient: Partial<IClient>,
            targetClient: IClient,
            targetContact: IContacts
        }
    }
}