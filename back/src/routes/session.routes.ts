import { Router } from "express";
import { loginClientController } from "../controllers/session.controllers";

import clientEmailExists from "../middlewares/clientExists.middleware";

const sessionRoutes = Router()

sessionRoutes.post("/", clientEmailExists, loginClientController)

export default sessionRoutes