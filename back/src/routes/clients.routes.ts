import { Router } from "express";

import clientHasAuth from "../middlewares/clientHasAuth.middleware";
import tokenIsValid from "../middlewares/tokenIsValid.middleware";

import { createClientController, getClientByTokenController, updateClientByIdController, deleteClientByIdController } from "../controllers/clients.controllers";

const clientRoutes = Router()

clientRoutes.post("/", createClientController)
clientRoutes.get("/", tokenIsValid, getClientByTokenController)
clientRoutes.patch("/:id", tokenIsValid, clientHasAuth, updateClientByIdController)
clientRoutes.delete("/:id", tokenIsValid, clientHasAuth, deleteClientByIdController)

export default clientRoutes