export class InvalidScopeError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidScopeError';
    this.error = 'invalid_scope';
    this.error_description = message;
    this.code = 400;

    Error.captureStackTrace(this, InvalidScopeError);
  }
}
