import { Request, Response } from "express";
import { IClient, IClientLogin } from "../interfaces/clients.interfaces"
import loginClientService from "../services/sessions/loginClient.service";

export const loginClientController = async (req: Request, res: Response) => {
    const clientData: Partial<IClient> = req.reqClient
    const loginData: IClientLogin = req.body

    const token = await loginClientService(clientData, loginData)

    return res.json({token})
}