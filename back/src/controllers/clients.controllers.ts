import { Request, Response } from "express"
import { IClientRequest } from "../interfaces/clients.interfaces"
import createClientService from "../services/clients/createClients.service"
import deleteClientService from "../services/clients/deleteClients.service"
import getClientService from "../services/clients/getClients.service"
import updateClientService from "../services/clients/updateClients.service"

export const createClientController = async (req: Request, res: Response) => {
    const clientData: IClientRequest = req.body

    const createdClient = await createClientService(clientData)

    return res.status(201).json(createdClient)
}

export const getClientByTokenController = async (req: Request, res: Response) => {
    const clientId = req.reqClient.id!

    const serializedUser = await getClientService(clientId)

    return res.status(200).json(serializedUser)
}

export const updateClientByIdController = async (req: Request, res: Response) => {
    const updateData = req.body
    const clientData = req.targetClient

    const updatedClient = await updateClientService(clientData, updateData)

    return res.status(200).json(updatedClient)
}

export const deleteClientByIdController = async (req: Request, res: Response) => {
    const user = req.targetClient

    await deleteClientService(user)

    return res.status(204).json()
}