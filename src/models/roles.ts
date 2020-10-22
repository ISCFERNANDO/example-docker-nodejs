/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from "sequelize";

export class roles extends Model {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_system?: boolean;
  status?: number;

  static initModel(sequelize: Sequelize) {
    roles.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        updated_by: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        is_system: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        status: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          references: {
            model: "registration_status",
            key: "id",
          },
          unique: "roles_ibfk_1",
        },
      },
      {
        sequelize,
        tableName: "roles",
        timestamps: false,
      }
    );
    return roles;
  }
}
