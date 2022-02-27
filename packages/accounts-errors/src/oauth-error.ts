export class OAuthError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string, name: string, error: string, code: number) {
    super(message);
    this.name = name;
    this.error = error;
    this.error_description = message;
    this.code = code;

    Error.captureStackTrace(this);
  }
}
