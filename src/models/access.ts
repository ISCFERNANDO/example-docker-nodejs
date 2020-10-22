import {
  BelongsTo,
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { registration_status } from "./registration_status";

@Table({ tableName: "access", timestamps: false })
export class access extends Model<access> {
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

  @ForeignKey(() => registration_status)
  @Column(DataTypes.INTEGER())
  status?: number;

  @BelongsTo(() => registration_status)
  registrationStatus?: registration_status;
}
