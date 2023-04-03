import {  Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

const clientAlreadyExists = async (req: Request, res: Response, next: NextFunction) => {
    if (req.reqClient) {
        throw new AppError(400, "This email is already in use")
    }

    return next()
}

export default clientAlreadyExists