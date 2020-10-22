import { Access } from "src/dto/access";
import { Response } from "../response/response";
import { AccessService } from "../services/interface/access.service";

export class AccessController {
  private accessService: AccessService;

  constructor(accessService: AccessService) {
    this.accessService = accessService;
  }

  public async getAllAccess(request: any, response: any): Promise<void> {
    const listOfAccess: Access[] = await this.accessService.getAllAccess();
    return Response.success(response, listOfAccess);
  }

  public async getOneAccess(request: any, response: any): Promise<void> {
    const { id } = request.params;
    const access = await this.accessService.getOneAccess(id);
    return Response.success(response, access);
  }

  public async addAccess(request: any, response: any): Promise<void> {
    const newAccess: Access = request.body || null;
    const access = await this.accessService.addAccess(newAccess);
    return Response.success(response, access);
  }

  public async updateAccess(request: any, response: any): Promise<void> {
    const newAccess: Access = request.body || null;
    const access = await this.accessService.updateAccess(newAccess);
    return Response.success(response, access);
  }

  public async deleteAccess(request: any, response: any): Promise<void> {
    const access = await this.accessService.deleteAccess(1);
    return Response.success(response, access);
  }
}
