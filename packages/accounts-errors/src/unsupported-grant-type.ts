export class UnsupportedGrantTypeError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = "UnsupportedGrantTypeError";
    this.error = "unsupported_grant_type";
    this.error_description = message;
    this.code = 400;

    Error.captureStackTrace(this);
  }
}
