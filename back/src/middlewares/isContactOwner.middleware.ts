import {  Request, Response, NextFunction } from "express";

import AppError from "../errors/appError";

const isContactOwner = async (req: Request, res: Response, next: NextFunction) => {
    if (req.targetContact.client !== req.reqClient.id) {
        throw new AppError(403, "User don't have permission to do that.")
    }

    return next()
}

export default isContactOwner