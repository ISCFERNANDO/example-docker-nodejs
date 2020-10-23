import { Access } from "src/dto/access";
import { access } from "../models/access";

export class AccessMapper {
  static modelToDto(model: access): Access {
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

  static dtoToModel(dto: access): access {
    const model = new access();
    model.name = dto.name;
    model.description = dto.description;
    model.status = dto.registrationStatus?.id;
    return model;
  }
}
