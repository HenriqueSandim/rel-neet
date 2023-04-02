import {  Request, Response, NextFunction } from "express";
import myDataSource from "../data-source";
import Clients from "../entities/clients.entity";
import AppError from "../errors/appError";

const clientEmailExists = async (req: Request, res: Response, next: NextFunction) => {
    const clientsRepo = myDataSource.getRepository(Clients)
    const clientEmail: string = req.body.email  

    const client = await clientsRepo.findOne({
        where: {
            email: clientEmail
        }
    })

    if (!client) {
        throw new AppError(404, "Wrong credentials.")
    }

    req.reqClient = client  

    return next()
}

export default clientEmailExists