export class TemporarilyUnavailableError extends Error {
  error: string;
  error_description: string;
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'TemporarilyUnavailableError';
    this.error = 'temporarily_unavailable';
    this.error_description = message;
    this.code = 503;

    Error.captureStackTrace(this, TemporarilyUnavailableError);
  }
}
