export abstract class ErrorHandler extends Error {
  statusCode: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export class InternalServerError extends ErrorHandler {
  constructor(message: string = "Internal server error") {
    super(500, message);
  }
}

export class NotFoundError extends ErrorHandler {
  constructor(message: string = "Not found error") {
    super(404, message);
  }
}

export class UnauthorizedError extends ErrorHandler {
  constructor(message: string = "Unauthorized error") {
    super(401, message);
  }
}

export class BadRequestError extends ErrorHandler {
  constructor(message: string = "Bad request error") {
    super(400, message);
  }
}

export class ConflictError extends ErrorHandler {
  constructor(message: string = "Conflict error") {
    super(409, message);
  }
}
