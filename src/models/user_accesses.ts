/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from "sequelize";

export class user_accesses extends Model {
  id_user?: number;
  id_access?: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  status?: number;
  permit_id?: number;

  static initModel(sequelize: Sequelize) {
    user_accesses.init(
      {
        id_user: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
          references: {
            model: "users",
            key: "id",
          },
        },
        id_access: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
          references: {
            model: "access",
            key: "id",
          },
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
        status: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          references: {
            model: "registration_status",
            key: "id",
          },
          unique: "user_accesses_ibfk_3",
        },
        permit_id: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          references: {
            model: "permits",
            key: "id",
          },
          unique: "user_accesses_ibfk_4",
        },
      },
      {
        sequelize,
        tableName: "user_accesses",
        timestamps: false,
      }
    );
    return user_accesses;
  }
}
