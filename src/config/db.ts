import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(`${process.env.POSTGRESQL_URL}/todo`);


export const connect = () => {
    try {
    sequelize.authenticate().then(() => {
    console.log("Postgres connection has been established successfully.");
    });
    } catch (error) {
    console.error("Unable to connect to the database:", error);
    }
};



export default sequelize;