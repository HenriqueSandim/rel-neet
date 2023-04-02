import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AppError from "../../errors/appError";
import { IClient, IClientLogin } from "../../interfaces/clients.interfaces";

import "dotenv/config"
import { loginClientSerializer } from "../../serializers/sessions.serializers";

const loginClientService = async (clientData: Partial<IClient>, loginData: IClientLogin): Promise<string> => {
    const loginPassword = loginData.password
    const dbPassword = clientData.password!

    await loginClientSerializer.validate(loginData, {
        abortEarly: false
    })
    .catch(err => {
        throw new AppError(400, err.errors)
    })

    const passwordMatch = await compare(loginPassword, dbPassword)

    if (!passwordMatch) {
        throw new AppError(404, "Wrong credentials.")
    }

    return sign(
        {
            email: clientData.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: clientData.id
        }
    )
}

export default loginClientService