import { Options } from "sequelize";
import { Sequelize } from "sequelize-typescript";

const ENV = process.env;
const port = ENV.DB_PORT || "3306";

const config: Options = {
  database: ENV.DB_NAME || "",
  username: ENV.DB_USERNAME || "",
  password: ENV.DB_PASSWORD || "",
  host: ENV.DB_HOST || "",
  port: parseInt(port),
  dialect: "mysql",
  pool: {
    min: 1,
    max: 150,
    acquire: 1000000,
    idle: 200,
    evict: 200,
  },
  logging: isDebugModeDB() ? console.log : false,
};

function isDebugModeDB(): boolean {
  if (!ENV.DB_DEBUG) {
    return false;
  }
  return ENV.DB_DEBUG == "true";
}
export default new Sequelize(config);
