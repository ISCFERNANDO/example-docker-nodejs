import { Rol } from "./rol";
import { RegistrationStatus } from "./registration_status";
import { Access } from "./access";

export interface User {
  id: number;
  name: string;
  firstSurname: string;
  secondSurname?: string;
  age?: number;
  email: string;
  rol?: Rol;
  personalizedAccess?: Access[];
  status: RegistrationStatus;
}
