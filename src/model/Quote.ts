import { Model, DataTypes } from "sequelize";
import  sequelize  from "../config/db";
export default class Quote extends Model {}
Quote.init(
{
id: {
type: DataTypes.UUIDV4,
primaryKey: true
},
phrase: DataTypes.STRING,
quotee: DataTypes.STRING
},
{ sequelize, modelName: "quote" }
);