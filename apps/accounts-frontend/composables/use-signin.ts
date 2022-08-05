import { AuthenticateUserRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/AuthenticateUserRequest';

export async function useSignIn(request: AuthenticateUserRequest) {
  return $fetch('/api/signin', {
    method: 'POST',
    body: request
  });
}
