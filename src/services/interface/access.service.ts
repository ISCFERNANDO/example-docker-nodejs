import { Access } from "../../dto/access";

export interface AccessService {
  findActiveAccess(): Promise<Access[]>;
  getAllAccess(): Promise<Access[]>;
  getOneAccess(id: number): Promise<Access>;
  addAccess(access: Access): Promise<Access>;
  updateAccess(access: Access, id: number): Promise<Access>;
  deleteAccess(id: number): Promise<Access>;
}
