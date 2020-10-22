/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from "sequelize";

export class users extends Model {
  id?: number;
  name?: string;
  firstSurname?: string;
  secondSurname?: string;
  age?: number;
  email?: string;
  id_rol?: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  status?: number;

  static initModel(sequelize: Sequelize) {
    users.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER(),
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        firstSurname: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        secondSurname: {
          type: DataTypes.STRING(40),
          allowNull: true,
        },
        age: {
          type: DataTypes.INTEGER(),
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: "email",
        },
        id_rol: {
          type: DataTypes.INTEGER(),
          allowNull: true,
          references: {
            model: "roles",
            key: "id",
          },
          unique: "users_ibfk_1",
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
          unique: "users_ibfk_2",
        },
      },
      {
        sequelize,
        tableName: "users",
        timestamps: false,
      }
    );
    return users;
  }
}
