import {
  Model,
  Column,
  PrimaryKey,
  Table,
  AutoIncrement,
  AllowNull,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table({ tableName: "permits", timestamps: false })
export class permits extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(60))
  name!: string;

  @AllowNull(false)
  @Column(DataTypes.DATE)
  created_at!: Date;

  @AllowNull(true)
  @Column(DataTypes.DATE)
  updated_at!: Date;
}
