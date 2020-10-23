import { registration_status } from "./registration_status";
import { access } from "./access";
import { users } from "./users";
import { DataTypes } from "sequelize";
import {
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
  AllowNull,
  Column,
  BelongsTo,
} from "sequelize-typescript";
import { permits } from "./permits";

@Table({ tableName: "user_accesses", timestamps: false })
export class user_accesses extends Model {
  @PrimaryKey
  @ForeignKey(() => users)
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id_user!: number;

  @PrimaryKey
  @ForeignKey(() => access)
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id_access!: number;

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
  @ForeignKey(() => registration_status)
  @Column(DataTypes.INTEGER())
  status!: number;

  @BelongsTo(() => registration_status)
  registrationStatus!: registration_status;

  @AllowNull(false)
  @ForeignKey(() => permits)
  @Column(DataTypes.INTEGER())
  permit_id!: number;

  @BelongsTo(() => permits)
  permit!: permits;
}
