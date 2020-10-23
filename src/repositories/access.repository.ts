import { Access } from "src/dto/access";
import { registration_status } from "./../models/registration_status";
import { Sequelize } from "sequelize";
import { RegistrationStatusEnum } from "../enums/registration-status.enum";
import { access } from "../models/access";
import { InternalServerError } from "../exceptions/error-handler";

export class AccessRepository {
  private static instance: AccessRepository;

  private AccessRepository() {}

  public static getInstance(): AccessRepository {
    if (this.instance == null) {
      this.instance = new AccessRepository();
    }
    return this.instance;
  }

  public async findActiveAccess(): Promise<access[]> {
    return access.findAll({
      attributes: ["id", "name", "description"],
      include: [
        {
          attributes: ["id", "name"],
          model: registration_status,
          where: { id: Sequelize.col("registrationStatus.id") },
          required: true,
        },
      ],
      where: { status: RegistrationStatusEnum.ACTIVE },
    });
  }

  public async findAll(): Promise<access[]> {
    return access.findAll({
      attributes: ["id", "name", "description"],
      include: [
        {
          attributes: ["id", "name"],
          model: registration_status,
          where: { id: Sequelize.col("registrationStatus.id") },
          required: true,
        },
      ],
    });
  }

  public async findOne(id: number): Promise<access> {
    try {
      return access.findOne({
        include: [
          {
            attributes: ["id", "name"],
            model: registration_status,
            where: { id: Sequelize.col("registrationStatus.id") },
            required: true,
          },
        ],
        where: { id },
      });
    } catch (error) {
      throw new InternalServerError();
    }
  }

  public async findByName(name: string): Promise<access> {
    try {
      return access.findOne({
        attributes: ["id", "name", "description", "status"],
        where: { name },
      });
    } catch (error) {
      throw new InternalServerError();
    }
  }

  public async add(newAccess: Access): Promise<access> {
    return access.create({
      name: newAccess.name,
      description: newAccess.description,
      status: RegistrationStatusEnum.ACTIVE,
      created_by: "administrador",
    });
  }

  public async update(newAccess: Access, id: number): Promise<void> {
    await access.update(
      {
        name: newAccess.name,
        description: newAccess.description,
        updated_by: "administrador",
      },
      { where: { id } }
    );
  }

  public async delete(id: number): Promise<void> {
    await access.update(
      {
        status: RegistrationStatusEnum.DELETED,
      },
      { where: { id } }
    );
  }
}
