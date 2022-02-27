import { AuthenticateUserRequest } from "~~/../accounts-protobuf/generated/core_pb";

export async function useSignIn(options: AuthenticateUserRequest) {
  return $fetch("/api/signin", {
    method: "POST",
    body: options,
  });
}
