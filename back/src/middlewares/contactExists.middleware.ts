import {  Request, Response, NextFunction } from "express";
import myDataSource from "../data-source";
import Contacts from "../entities/contacts.entity";
import AppError from "../errors/appError";

const contactExists = async (req: Request, res: Response, next: NextFunction) => {
    const contactsRepo = myDataSource.getRepository(Contacts)

    const contactId = req.params.id

    const contact = await contactsRepo.findOne({
        where: {
            id: contactId
        }
    })

    if (!contact) {
        throw new AppError(404, "Contact not found.")
    }

    req.targetContact = contact

    return next()
}

export default contactExists