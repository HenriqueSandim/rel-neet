import "reflect-metadata"
import { DataSource } from "typeorm"

import "dotenv/config"

import Contacts from "./entities/contacts.entity"
import Clients from "./entities/clients.entity"

import {InitialMigration1680279401398} from "./migrations/1680279401398-InitialMigration"


const myDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [Contacts, Clients],
    migrations: [InitialMigration1680279401398]
})

export default myDataSource