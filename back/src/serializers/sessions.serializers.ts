import * as yup from "yup"
import { Schema } from "yup";
import { IClientLogin } from "../interfaces/clients.interfaces";

export const loginClientSerializer: Schema<IClientLogin> = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})