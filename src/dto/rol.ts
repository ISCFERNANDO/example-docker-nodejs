import { Access } from "./access";
import { RegistrationStatus } from "./registration_status";

export interface Rol {
  id: number;
  name: string;
  description?: string;
  accesses: Access[];
  status: RegistrationStatus;
}
