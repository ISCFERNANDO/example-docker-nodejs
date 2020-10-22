import { registration_status } from "./../models/registration_status";
import { Sequelize } from "sequelize";
import { Access } from "src/dto/access";
import { RegistrationStatusEnum } from "../enums/registration-status.enum";
import { ACCESS } from "../constants/constants.json";
import { access } from "../models/access";

export class AccessRepository {
  private static instance: AccessRepository;

  private AccessRepository() {}

  public static getInstance(): AccessRepository {
    if (this.instance == null) {
      this.instance = new AccessRepository();
    }
    return this.instance;
  }

  public async findAll(): Promise<Access[]> {
    const listOfaccesses: access[] = await access.findAll({
      attributes: ["id", "name", "description"],
      include: [
        {
          attributes: ["id", "name"],
          model: registration_status,
          where: { id: Sequelize.col("registrationStatus.id") },
          required: true,
        },
      ],
      where: {
        status: RegistrationStatusEnum.ACTIVE,
      },
    });
    return listOfaccesses.map((item) => this.mapModelToDto(item));
  }

  public async findOne(id: number): Promise<Access> {
    const data: access | null = await access.findOne({
      where: {
        id,
        status: RegistrationStatusEnum.ACTIVE,
      },
    });
    if (!data) {
      throw new Error(ACCESS.NOT_FOUND);
    }
    return this.mapModelToDto(data);
  }

  public async add(newAccess: Access): Promise<Access> {
    const accessCreated: access = await access.create({
      name: newAccess.name,
      description: newAccess.description,
      status: RegistrationStatusEnum.ACTIVE,
      created_by: "administrador",
    });
    newAccess.id = accessCreated.id || 0;
    return newAccess;
  }

  private mapModelToDto(model: access): Access {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
      status: {
        id: model.registrationStatus?.id,
        name: model.registrationStatus?.name,
      },
    };
  }
}
