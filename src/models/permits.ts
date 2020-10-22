/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from "sequelize";

export class permits extends Model {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;

  static initModel(sequelize: Sequelize) {
    permits.init(
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
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "permits",
        timestamps: false,
      }
    );
    return permits;
  }
}
