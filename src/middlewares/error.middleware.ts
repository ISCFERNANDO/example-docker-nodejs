import { ErrorHandler } from "../exceptions/error-handler";

export const handlerError = (
  error: ErrorHandler,
  req: any,
  res: any,
  next: any
) => {
  const { statusCode, message } = error;
  if (!statusCode) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
  res.status(statusCode).json({
    status: statusCode,
    message: message,
  });
};
