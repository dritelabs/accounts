export class InvalidRequestError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidRequestError';
    this.error = 'invalid_request';
    this.error_description = message;
    this.code = 400;

    Error.captureStackTrace(this, InvalidRequestError);
  }
}
