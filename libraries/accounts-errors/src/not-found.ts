export class NotFound extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.error = 'not_found';
    this.error_description = message;
    this.code = 404;

    Error.captureStackTrace(this, NotFound);
  }
}
