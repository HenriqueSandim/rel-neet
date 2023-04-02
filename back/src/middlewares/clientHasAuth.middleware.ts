import {  Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";

import AppError from "../errors/appError";

import Clients from "../entities/clients.entity";


const clientHasAuth = async (req: Request, res: Response, next: NextFunction) => {
    const reqClientId: string = req.reqClient.id!
    const targetClientId: string = req.params.id
    
    const userRepo = AppDataSource.getRepository(Clients)

    const targetClient = await userRepo.createQueryBuilder("user")
    .where("id = :id", { id: targetClientId })
    .getOne()
    
    if (!targetClient) {
        throw new AppError(404, "Target user not found.")
    }

    if (reqClientId !== targetClient.id) {
        throw new AppError(403, "User don't have permission to do this.")
    }

    req.targetClient = targetClient
    
    return next()
}

export default clientHasAuth