import * as yup from "yup";

export async function validateRevocationRequest(request: RevocationRequest) {
  return revocationRequestSchema.validate(request);
}

export const revocationRequestSchema = yup.object({
  token: yup.string().required(),
  token_hint: yup.string(),
});

export type RevocationRequest = yup.InferType<typeof revocationRequestSchema>;
