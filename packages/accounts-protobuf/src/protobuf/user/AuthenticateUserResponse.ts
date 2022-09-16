// Original file: proto/user.proto


export interface AuthenticateUserResponse {
  'id'?: (string);
  'accessToken'?: (string);
  'email'?: (string);
  'expiresIn'?: (number);
  'refreshToken'?: (string);
  'tokenType'?: (string);
}

export interface AuthenticateUserResponse__Output {
  'id': (string);
  'accessToken': (string);
  'email': (string);
  'expiresIn': (number);
  'refreshToken': (string);
  'tokenType': (string);
}
