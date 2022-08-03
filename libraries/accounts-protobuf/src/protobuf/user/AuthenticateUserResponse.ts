// Original file: proto/user.proto

export interface AuthenticateUserResponse {
  id?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: number;
}

export interface AuthenticateUserResponse__Output {
  id: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}
