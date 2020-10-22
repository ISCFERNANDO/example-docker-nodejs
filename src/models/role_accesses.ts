import { permits } from "./permits";
import { access } from "./access";
import { roles } from "./roles";
import { registration_status } from "./registration_status";
import {
  Model,
  Table,
  PrimaryKey,
  AllowNull,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";

@Table({ tableName: "role_accesses", timestamps: false })
export class role_accesses extends Model {
  @PrimaryKey
  @ForeignKey(() => roles)
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id_rol?: number;

  @PrimaryKey
  @ForeignKey(() => access)
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id_access?: number;

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
  @ForeignKey(() => registration_status)
  @Column(DataTypes.INTEGER())
  status?: number;

  @BelongsTo(() => registration_status)
  registrationStatus?: registration_status;

  @AllowNull(false)
  @ForeignKey(() => permits)
  @Column(DataTypes.INTEGER())
  permit_id?: number;

  @BelongsTo(() => permits)
  permit?: permits;
}
