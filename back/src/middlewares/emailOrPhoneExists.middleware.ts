import {  Request, Response, NextFunction } from "express";

import myDataSource from "../data-source";

import { EntityTarget, ObjectLiteral } from "typeorm";

const emailOrPhoneExists = (searchEntity: EntityTarget<ObjectLiteral>) => async (req: Request, res: Response, next: NextFunction) => {
    const entityRepo = myDataSource.getRepository(searchEntity)

    const emailReq = req.body.email
    const phoneNumberReq = req.body.phoneNumber

    const dataAlreadyExists = await entityRepo.findOne({
        where: [
            { email:  emailReq },
            { phoneNumber:  phoneNumberReq }
        ]
    })

    req.dataExists = dataAlreadyExists

    return next()
}

export default emailOrPhoneExists