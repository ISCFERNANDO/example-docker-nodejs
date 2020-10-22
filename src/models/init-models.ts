import { user_accesses } from "./user_accesses";
import { users } from "./users";
import { roles } from "./roles";
import { permits } from "./permits";
import { Sequelize } from "sequelize-typescript";
import { access } from "./access";
import { registration_status } from "./registration_status";
import { role_accesses } from "./role_accesses";

export default function initModels(sequelize: Sequelize) {
  sequelize.addModels([
    access,
    registration_status,
    permits,
    role_accesses,
    roles,
    user_accesses,
    users,
  ]);
}
