export class InvalidGrantError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidGrantError';
    this.error = 'invalid_grant';
    this.error_description = message;
    this.code = 400;

    Error.captureStackTrace(this, InvalidGrantError);
  }
}
