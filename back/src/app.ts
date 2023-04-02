
import "express-async-errors"
import express from "express"
import errorHandler from "./errors/errorHandler";

import clientRoutes from "./routes/clients.routes";
import sessionRoutes from "./routes/session.routes";
import contactRoutes from "./routes/contacts.routes";

const app = express();
app.use(express.json());

app.use("/clients", clientRoutes)
app.use("/contacts", contactRoutes)
app.use("/login", sessionRoutes)

app.use(errorHandler)

export default app
