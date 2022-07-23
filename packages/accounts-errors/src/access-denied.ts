export class AccessDeniedError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = "AccessDeniedError";
    this.error = "access_denied";
    this.error_description = message;
    this.code = 301;

    Error.captureStackTrace(this, AccessDeniedError);
  }
}
