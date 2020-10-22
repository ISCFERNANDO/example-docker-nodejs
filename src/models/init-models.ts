import { Sequelize } from "sequelize-typescript";
import { access } from "./access";
import { registration_status } from "./registration_status";

export default function initModels(sequelize: Sequelize) {
  sequelize.addModels([registration_status, access]);
}
