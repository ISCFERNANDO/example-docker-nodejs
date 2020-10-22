import { RegistrationStatus } from "./registration_status";

export interface Access {
  id?: number;
  name?: string;
  description?: string;
  status?: RegistrationStatus;
}
