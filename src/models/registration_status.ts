import { DataTypes } from "sequelize";
import { Model, Table, Column, PrimaryKey } from "sequelize-typescript";

@Table({ tableName: "registration_status", timestamps: false })
export class registration_status extends Model<registration_status> {
  @PrimaryKey
  @Column(DataTypes.INTEGER())
  id?: number;

  @Column(DataTypes.STRING(60))
  name?: string;

  @Column(DataTypes.STRING(200))
  description?: string;

  @Column(DataTypes.DATE)
  created_at?: Date;

  @Column(DataTypes.DATE)
  updated_at?: Date;

  @Column(DataTypes.STRING(100))
  created_by?: string;

  @Column(DataTypes.STRING(100))
  updated_by?: string;

  @Column(DataTypes.BOOLEAN)
  is_system?: boolean;

  @Column(DataTypes.INTEGER())
  status?: number;
}
