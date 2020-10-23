import { Access } from "src/dto/access";
import { Response } from "../response/response";
import { AccessService } from "../services/interface/access.service";

export class AccessController {
  private accessService: AccessService;

  constructor(accessService: AccessService) {
    this.accessService = accessService;
  }

  public async getAllAccess(
    request: any,
    response: any,
    next: any
  ): Promise<void> {
    try {
      const listOfAccess: Access[] = await this.accessService.getAllAccess();
      return Response.success(response, listOfAccess);
    } catch (error) {
      next(error);
    }
  }

  public async getOneAccess(
    request: any,
    response: any,
    next: any
  ): Promise<void> {
    try {
      const { id } = request.params;
      const access = await this.accessService.getOneAccess(id);
      return Response.success(response, access);
    } catch (error) {
      next(error);
    }
  }

  public async addAccess(
    request: any,
    response: any,
    next: any
  ): Promise<void> {
    try {
      const newAccess: Access = request.body;
      const access = await this.accessService.addAccess(newAccess);
      return Response.success(response, access);
    } catch (error) {
      next(error);
    }
  }

  public async updateAccess(
    request: any,
    response: any,
    next: any
  ): Promise<void> {
    try {
      const { id } = request.params;
      const newAccess: Access = request.body;
      const access = await this.accessService.updateAccess(newAccess, id);
      return Response.success(response, access);
    } catch (error) {
      next(error);
    }
  }

  public async deleteAccess(
    request: any,
    response: any,
    next: any
  ): Promise<void> {
    try {
      const { id } = request.params;
      const access = await this.accessService.deleteAccess(id);
      return Response.success(response, access);
    } catch (error) {
      next(error);
    }
  }
}
