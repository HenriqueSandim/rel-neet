import { Router } from "express";
import { createContactsController, deleteContactsController, getContactsController, updateContactsController } from "../controllers/contacts.controllers";
import tokenIsValid from "../middlewares/tokenIsValid.middleware";
import contactExists from "../middlewares/contactExists.middleware";
import isContactOwner from "../middlewares/isContactOwner.middleware";


const contactRoutes = Router()

contactRoutes.get("/", tokenIsValid, getContactsController)
contactRoutes.post("/", tokenIsValid, createContactsController)
contactRoutes.patch("/:id", tokenIsValid, contactExists, isContactOwner,updateContactsController)
contactRoutes.delete("/:id", tokenIsValid, contactExists, isContactOwner, deleteContactsController)

export default contactRoutes