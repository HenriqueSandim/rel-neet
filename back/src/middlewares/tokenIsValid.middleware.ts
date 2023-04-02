import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import AppError from "../errors/appError";
import "dotenv/config"

const   tokenIsValid = async (req: Request, res: Response, next: NextFunction) => {
    const completeToken = req.headers.authorization

    if (!completeToken) {
        throw new AppError(401, "Missing authorization token.")
    }
    
    const token = completeToken.split(" ", 2)[1]
    
    verify(token, process.env.SECRET_KEY!, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                error: err.message
            })
        }
        
        req.reqClient = {
            id: decoded?.sub as string,
        }
    })    

    return next()
}

export default tokenIsValid