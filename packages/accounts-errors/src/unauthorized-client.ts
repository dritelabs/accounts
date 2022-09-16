export class UnauthorizedClientError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedClientError';
    this.error = 'unauthorized_client';
    this.error_description = message;
    this.code = 401;

    Error.captureStackTrace(this, UnauthorizedClientError);
  }
}
