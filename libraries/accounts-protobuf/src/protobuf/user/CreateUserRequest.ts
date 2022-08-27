// Original file: proto/user.proto


export interface CreateUserRequest {
  'confirmPassword'?: (string);
  'email'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'password'?: (string);
}

export interface CreateUserRequest__Output {
  'confirmPassword': (string);
  'email': (string);
  'firstName': (string);
  'lastName': (string);
  'password': (string);
}
