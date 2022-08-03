import * as yup from 'yup';

export async function validateRefreshTokenGrantRequest(request: RefreshTokenGrantRequest) {
  return refreshTokenRequestSchema.validate(request);
}

export const refreshTokenRequestSchema = yup.object({
  refresh_token: yup.string().required()
});

export type RefreshTokenGrantRequest = yup.InferType<typeof refreshTokenRequestSchema>;
