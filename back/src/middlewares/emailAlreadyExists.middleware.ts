import {  Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

export const emailAlreadyExists = async (req: Request, res: Response, next: NextFunction) => {
    if (req.dataExists.email === req.body.email) {
        throw new AppError(400, "Email already in use")
    }

    return next()
}

export default emailAlreadyExists