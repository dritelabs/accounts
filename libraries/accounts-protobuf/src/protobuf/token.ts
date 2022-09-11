import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  token: {
    CreateTokenWithAuthorizationCodeRequest: MessageTypeDefinition
    CreateTokenWithClientCredentialsRequest: MessageTypeDefinition
    IntrospectTokenRequest: MessageTypeDefinition
    IntrospectTokenResponse: MessageTypeDefinition
    InvalidateTokenRequest: MessageTypeDefinition
    InvalidateTokenResponse: MessageTypeDefinition
    RefreshTokenRequest: MessageTypeDefinition
    RevokeTokenRequest: MessageTypeDefinition
    RevokeTokenResponse: MessageTypeDefinition
    TokenResponse: MessageTypeDefinition
    ValidateTokenRequest: MessageTypeDefinition
    ValidateTokenResponse: MessageTypeDefinition
  }
}

