export class ServerError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = "ServerError";
    this.error = "server_error";
    this.error_description = message;
    this.code = 500;

    Error.captureStackTrace(this, ServerError);
  }
}
