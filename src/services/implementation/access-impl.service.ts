import {
  ConflictError,
  InternalServerError,
  NotFoundError,
} from "./../../exceptions/error-handler";
import { access } from "./../../models/access";
import { AccessRepository } from "./../../repositories/access.repository";
import { Access } from "src/dto/access";
import { AccessService } from "../interface/access.service";
import { ACCESS } from "../../constants/constants.json";
import { AccessMapper } from "../../mapper/access.mapper";

export class AccessServiceImpl implements AccessService {
  private accessRepository: AccessRepository;

  constructor() {
    this.accessRepository = AccessRepository.getInstance();
  }

  async findActiveAccess(): Promise<Access[]> {
    try {
      const listOfaccesses: access[] = await this.accessRepository.findAll();
      return listOfaccesses.map((item) => AccessMapper.modelToDto(item));
    } catch (error) {
      throw new InternalServerError();
    }
  }

  async getAllAccess(): Promise<Access[]> {
    try {
      const listOfaccesses: access[] = await this.accessRepository.findAll();
      return listOfaccesses.map((item) => AccessMapper.modelToDto(item));
    } catch (error) {
      throw new InternalServerError();
    }
  }

  async getOneAccess(id: number): Promise<Access> {
    const data: access = await this.getIfExistAccessById(id);
    return AccessMapper.modelToDto(data);
  }

  async addAccess(newAccess: Access): Promise<Access> {
    await this.getIfExistAccessByName(newAccess.name);
    try {
      const { id } = await this.accessRepository.add(newAccess);
      const data = await this.getIfExistAccessById(id);
      return AccessMapper.modelToDto(data);
    } catch (error) {
      console.log(error);
      throw new InternalServerError();
    }
  }

  async updateAccess(accessToUpdate: Access, id: number): Promise<Access> {
    await this.getIfExistAccessById(id);
    try {
      await this.accessRepository.update(accessToUpdate, id);
      return accessToUpdate;
    } catch (error) {
      throw new InternalServerError();
    }
  }

  async deleteAccess(id: number): Promise<Access> {
    let data = await this.getIfExistAccessById(id);
    try {
      await this.accessRepository.delete(id);
      data = await this.accessRepository.findOne(id);
      return AccessMapper.modelToDto(data);
    } catch (error) {
      throw new InternalServerError();
    }
  }

  async getIfExistAccessById(id: number): Promise<access> {
    let data: access = await this.accessRepository.findOne(id);
    if (!data) {
      throw new NotFoundError(ACCESS.NOT_FOUND);
    }
    return data;
  }

  async getIfExistAccessByName(name: string): Promise<access> {
    let data: access = await this.accessRepository.findByName(name);
    if (data) {
      throw new ConflictError(ACCESS.CONFLICT_WITH_NAME);
    }
    return data;
  }
}
