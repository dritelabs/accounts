import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AccountClient as _accounts_AccountClient, AccountDefinition as _accounts_AccountDefinition } from './accounts/Account';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  accounts: {
    Account: SubtypeConstructor<typeof grpc.Client, _accounts_AccountClient> & { service: _accounts_AccountDefinition }
  }
  authorization_code: {
    CreateAuthorizationCodeRequest: MessageTypeDefinition
    CreateAuthorizationCodeResponse: MessageTypeDefinition
    InvalidateAuthorizationCodeRequest: MessageTypeDefinition
    InvalidateAuthorizationCodeResponse: MessageTypeDefinition
  }
  client: {
    AuthenticateClientRequest: MessageTypeDefinition
    CreateClientRequest: MessageTypeDefinition
    ListClientsResponse: MessageTypeDefinition
    UpdateClientRequest: MessageTypeDefinition
    UpdateClientSecretRequest: MessageTypeDefinition
  }
  core: {
    Address: MessageTypeDefinition
    AuthorizationServerMetadata: MessageTypeDefinition
    Client: MessageTypeDefinition
    ClientApproval: MessageTypeDefinition
    DeleteRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetRequest: MessageTypeDefinition
    JWKS: MessageTypeDefinition
    ListRequest: MessageTypeDefinition
    PrivateJWK: MessageTypeDefinition
    Profile: MessageTypeDefinition
    PublicJWK: MessageTypeDefinition
    Scope: MessageTypeDefinition
    User: MessageTypeDefinition
  }
  jwk: {
    AddJWKToClientRequest: MessageTypeDefinition
    CreateJWKPairResponse: MessageTypeDefinition
    DeleteJWKResponse: MessageTypeDefinition
  }
  scope: {
    ListScopesResponse: MessageTypeDefinition
  }
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
  user: {
    AuthenticateUserRequest: MessageTypeDefinition
    AuthenticateUserResponse: MessageTypeDefinition
    CreateUserRequest: MessageTypeDefinition
  }
}

