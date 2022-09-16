export class BadRequest extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.error = 'bad_request';
    this.error_description = message;
    this.code = 400;

    Error.captureStackTrace(this, BadRequest);
  }
}
