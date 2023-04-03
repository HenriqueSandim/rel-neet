import {  Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

export const phoneNumberAlreadyExists = async (req: Request, res: Response, next: NextFunction) => {
    
    if (req.dataExists.phoneNumber === req.body.phoneNumber) {
        throw new AppError(400, "Phone number already in use")
    }

    return next()
}

export default phoneNumberAlreadyExists