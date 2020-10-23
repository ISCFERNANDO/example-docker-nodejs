import { access } from "./access";
import { registration_status } from "./registration_status";
import { roles } from "./roles";
import { DataTypes } from "sequelize";
import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  Unique,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { user_accesses } from "./user_accesses";

@Table({ tableName: "users", timestamps: false })
export class users extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER())
  id!: number;

  @AllowNull(false)
  @Column(DataTypes.STRING(40))
  name!: string;

  @AllowNull(false)
  @Column(DataTypes.STRING(40))
  firstSurname!: string;

  @AllowNull(true)
  @Column(DataTypes.STRING(40))
  secondSurname!: string;

  @AllowNull(true)
  @Column(DataTypes.INTEGER())
  age!: number;

  @AllowNull(false)
  @Unique
  @Column(DataTypes.STRING(100))
  email!: string;

  @AllowNull(true)
  @ForeignKey(() => roles)
  @Column(DataTypes.INTEGER())
  id_rol!: number;

  @BelongsTo(() => roles)
  rol!: roles;

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

  @BelongsToMany(() => access, () => user_accesses)
  access!: access[];
}
