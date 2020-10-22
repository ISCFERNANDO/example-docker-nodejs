import {
  BelongsTo,
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  AllowNull,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { registration_status } from "./registration_status";

@Table({ tableName: "access", timestamps: false })
export class access extends Model<access> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id?: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(60))
  name?: string;

  @AllowNull(true)
  @Column(DataTypes.STRING(200))
  description?: string;

  @AllowNull(false)
  @Column(DataTypes.DATE)
  created_at?: Date;

  @AllowNull(true)
  @Column(DataTypes.DATE)
  updated_at?: Date;

  @AllowNull(false)
  @Column(DataTypes.STRING(100))
  created_by?: string;

  @AllowNull(true)
  @Column(DataTypes.STRING(100))
  updated_by?: string;

  @AllowNull(false)
  @Column(DataTypes.BOOLEAN)
  is_system?: boolean;

  @AllowNull(false)
  @ForeignKey(() => registration_status)
  @Column(DataTypes.INTEGER())
  status?: number;

  @BelongsTo(() => registration_status)
  registrationStatus?: registration_status;
}
