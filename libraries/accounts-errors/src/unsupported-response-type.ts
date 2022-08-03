export class UnsupportedResponseTypeError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'UnsupportedResponseTypeError';
    this.error = 'unsupported_response_type';
    this.error_description = message;
    this.code = 400;

    Error.captureStackTrace(this, UnsupportedResponseTypeError);
  }
}
