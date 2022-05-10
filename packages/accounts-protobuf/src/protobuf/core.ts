import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  core: {
    AuthenticateUserRequest: MessageTypeDefinition
    AuthenticateUserResponse: MessageTypeDefinition
    AuthorizationServerMetadata: MessageTypeDefinition
    Client: MessageTypeDefinition
    CreateAuthorizationCodeRequest: MessageTypeDefinition
    CreateAuthorizationCodeResponse: MessageTypeDefinition
    CreateTokenRequest: MessageTypeDefinition
    CreateTokenResponse: MessageTypeDefinition
    CreateUserRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetClientRequest: MessageTypeDefinition
    Jwk: MessageTypeDefinition
    Jwks: MessageTypeDefinition
    ListScopesRequest: MessageTypeDefinition
    ListScopesResponse: MessageTypeDefinition
    Scope: MessageTypeDefinition
    User: MessageTypeDefinition
  }
}

