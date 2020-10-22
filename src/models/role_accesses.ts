/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from "sequelize";
export class role_accesses extends Model {
  id_rol?: number;
  id_access?: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  status?: number;
  permit_id?: number;

  static initModel(sequelize: Sequelize) {
    role_accesses.init(
      {
        id_rol: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
          references: {
            model: "roles",
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
          unique: "role_accesses_ibfk_4",
        },
        permit_id: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          references: {
            model: "permits",
            key: "id",
          },
          unique: "role_accesses_ibfk_3",
        },
      },
      {
        sequelize,
        tableName: "role_accesses",
        timestamps: false,
      }
    );
    return role_accesses;
  }
}
