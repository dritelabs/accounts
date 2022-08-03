import { AuthenticateUserRequest } from '@drite/accounts-protobuf/dist/protobuf/core/AuthenticateUserRequest';

export async function useSignIn(request: AuthenticateUserRequest) {
  return $fetch('/api/signin', {
    method: 'POST',
    body: request
  });
}
