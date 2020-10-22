import { Access } from "../../dto/access";

export interface AccessService {
  getAllAccess(): Promise<Access[]>;
  getOneAccess(id: number): Promise<Access>;
  addAccess(access: Access): Promise<Access>;
  updateAccess(access: Access): Promise<Access>;
  deleteAccess(id: number): Promise<Access>;
}
