import { CustomError, ResponseBase } from "./response-base";

export class Response {
  public static success(response: any, data: any, message?: string) {
    return this.buildResponse(response, 200, {
      message: message || "Operación exitosa",
      data,
    });
  }

  public static notFoud(response: any, message: string, errors: CustomError) {
    return this.buildResponse(response, 404, {
      message,
      errors,
    });
  }

  public static conflict(response: any, message: string, errors: CustomError) {
    return this.buildResponse(response, 409, {
      message,
      errors,
    });
  }

  public static unauthorized(
    response: any,
    message: string,
    errors: CustomError
  ) {
    return this.buildResponse(response, 401, {
      message,
      errors,
    });
  }

  public static badRequest(
    response: any,
    message: string,
    errors: CustomError
  ) {
    return this.buildResponse(response, 400, {
      message,
      errors,
    });
  }

  public static serverError(
    response: any,
    message: string,
    errors: CustomError
  ) {
    return this.buildResponse(response, 500, {
      message,
      errors,
    });
  }

  private static buildResponse(
    response: any,
    status: number,
    resp: ResponseBase
  ) {
    return response.status(status).send({
      status,
      message: resp.message,
      errors: resp.errors,
      data: resp.data,
    });
  }
}
