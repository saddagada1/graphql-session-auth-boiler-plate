import "reflect-metadata"
import { DataSource } from "typeorm"
import { __prod__ } from "./constants"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: "database-name",
    synchronize: !__prod__,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
