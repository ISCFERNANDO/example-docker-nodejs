import { DataTypes } from "sequelize";
import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from "sequelize-typescript";

@Table({ tableName: "registration_status", timestamps: false })
export class registration_status extends Model<registration_status> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(60))
  name!: string;

  @AllowNull(true)
  @Column(DataTypes.STRING(200))
  description!: string;

  @AllowNull(false)
  @Column(DataTypes.DATE)
  created_at!: Date;

  @AllowNull(true)
  @Column(DataTypes.DATE)
  updated_at!: Date;

  @AllowNull(false)
  @Column(DataTypes.STRING(100))
  created_by!: string;

  @AllowNull(true)
  @Column(DataTypes.STRING(100))
  updated_by!: string;

  @AllowNull(false)
  @Column(DataTypes.BOOLEAN)
  is_system!: boolean;

  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  status!: number;
}
