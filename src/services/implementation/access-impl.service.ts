import { AccessRepository } from "./../../repositories/access.repository";
import { Access } from "src/dto/access";
import { AccessService } from "../interface/access.service";

export class AccessServiceImpl implements AccessService {
  private accessRepository: AccessRepository;

  constructor() {
    this.accessRepository = AccessRepository.getInstance();
  }

  getAllAccess(): Promise<Access[]> {
    return this.accessRepository.findAll();
  }

  getOneAccess(id: number): Promise<Access> {
    return this.accessRepository.findOne(id);
  }

  addAccess(access: Access): Promise<Access> {
    return this.accessRepository.add(access);
  }

  updateAccess(access: Access): Promise<Access> {
    throw new Error("Error to update access.");
  }

  deleteAccess(id: number): Promise<Access> {
    throw new Error("Error to deleted access.");
  }
}
