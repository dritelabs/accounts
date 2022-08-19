import * as yup from 'yup';
import { decodeToken } from '@dritelabs/accounts-utils';
import { InvalidClientError } from '@dritelabs/accounts-errors';

export async function validateRefreshTokenGrantRequest(
  request: RefreshTokenGrantRequest,
  options: ValidateOptions
) {
  const validation = await refreshTokenRequestSchema.validate(request);

  const decoded = await decodeToken(validation.refresh_token);

  if (decoded.client_id !== options.clientId) {
    throw new InvalidClientError('The provided authorization grant was issued to another client.');
  }

  return validation;
}

export const refreshTokenRequestSchema = yup.object({
  refresh_token: yup.string().required()
});

export type RefreshTokenGrantRequest = yup.InferType<typeof refreshTokenRequestSchema>;

interface ValidateOptions {
  clientId?: string;
}
