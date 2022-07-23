export class InvalidClientError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = "InvalidClientError";
    this.error = "invalid_client";
    this.error_description = message;
    this.code = 401;

    Error.captureStackTrace(this, InvalidClientError);
  }
}
