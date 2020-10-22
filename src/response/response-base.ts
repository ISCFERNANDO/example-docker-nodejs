export interface ResponseBase {
  message: string;
  data?: any;
  errors?: CustomError;
}

export interface CustomError {
  code: number;
  message: string;
}
