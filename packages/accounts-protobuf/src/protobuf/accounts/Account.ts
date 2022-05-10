// Original file: proto/accounts.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthenticateUserRequest as _core_AuthenticateUserRequest, AuthenticateUserRequest__Output as _core_AuthenticateUserRequest__Output } from '../core/AuthenticateUserRequest';
import type { AuthenticateUserResponse as _core_AuthenticateUserResponse, AuthenticateUserResponse__Output as _core_AuthenticateUserResponse__Output } from '../core/AuthenticateUserResponse';
import type { AuthorizationServerMetadata as _core_AuthorizationServerMetadata, AuthorizationServerMetadata__Output as _core_AuthorizationServerMetadata__Output } from '../core/AuthorizationServerMetadata';
import type { Client as _core_Client, Client__Output as _core_Client__Output } from '../core/Client';
import type { CreateAuthorizationCodeRequest as _core_CreateAuthorizationCodeRequest, CreateAuthorizationCodeRequest__Output as _core_CreateAuthorizationCodeRequest__Output } from '../core/CreateAuthorizationCodeRequest';
import type { CreateAuthorizationCodeResponse as _core_CreateAuthorizationCodeResponse, CreateAuthorizationCodeResponse__Output as _core_CreateAuthorizationCodeResponse__Output } from '../core/CreateAuthorizationCodeResponse';
import type { CreateTokenRequest as _core_CreateTokenRequest, CreateTokenRequest__Output as _core_CreateTokenRequest__Output } from '../core/CreateTokenRequest';
import type { CreateTokenResponse as _core_CreateTokenResponse, CreateTokenResponse__Output as _core_CreateTokenResponse__Output } from '../core/CreateTokenResponse';
import type { CreateUserRequest as _core_CreateUserRequest, CreateUserRequest__Output as _core_CreateUserRequest__Output } from '../core/CreateUserRequest';
import type { Empty as _core_Empty, Empty__Output as _core_Empty__Output } from '../core/Empty';
import type { GetClientRequest as _core_GetClientRequest, GetClientRequest__Output as _core_GetClientRequest__Output } from '../core/GetClientRequest';
import type { Jwks as _core_Jwks, Jwks__Output as _core_Jwks__Output } from '../core/Jwks';
import type { ListScopesRequest as _core_ListScopesRequest, ListScopesRequest__Output as _core_ListScopesRequest__Output } from '../core/ListScopesRequest';
import type { ListScopesResponse as _core_ListScopesResponse, ListScopesResponse__Output as _core_ListScopesResponse__Output } from '../core/ListScopesResponse';
import type { User as _core_User, User__Output as _core_User__Output } from '../core/User';

export interface AccountClient extends grpc.Client {
  AuthenticateUser(argument: _core_AuthenticateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  AuthenticateUser(argument: _core_AuthenticateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  AuthenticateUser(argument: _core_AuthenticateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  AuthenticateUser(argument: _core_AuthenticateUserRequest, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _core_AuthenticateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _core_AuthenticateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _core_AuthenticateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _core_AuthenticateUserRequest, callback: grpc.requestCallback<_core_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  
  CreateAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  CreateAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  CreateAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  CreateAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _core_CreateAuthorizationCodeRequest, callback: grpc.requestCallback<_core_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  
  CreateToken(argument: _core_CreateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  CreateToken(argument: _core_CreateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  CreateToken(argument: _core_CreateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  CreateToken(argument: _core_CreateTokenRequest, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  createToken(argument: _core_CreateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  createToken(argument: _core_CreateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  createToken(argument: _core_CreateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  createToken(argument: _core_CreateTokenRequest, callback: grpc.requestCallback<_core_CreateTokenResponse__Output>): grpc.ClientUnaryCall;
  
  CreateUser(argument: _core_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _core_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _core_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _core_CreateUserRequest, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _core_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _core_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _core_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _core_CreateUserRequest, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  
  GetAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  GetAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  GetAuthorizationServerMetadata(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  GetAuthorizationServerMetadata(argument: _core_Empty, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  
  GetClient(argument: _core_GetClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  GetClient(argument: _core_GetClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  GetClient(argument: _core_GetClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  GetClient(argument: _core_GetClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  GetJWKS(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  GetJWKS(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  GetJWKS(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  GetJWKS(argument: _core_Empty, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, callback: grpc.requestCallback<_core_Jwks__Output>): grpc.ClientUnaryCall;
  
  ListScopes(argument: _core_ListScopesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  ListScopes(argument: _core_ListScopesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  ListScopes(argument: _core_ListScopesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  ListScopes(argument: _core_ListScopesRequest, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListScopesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListScopesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListScopesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListScopesRequest, callback: grpc.requestCallback<_core_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AccountHandlers extends grpc.UntypedServiceImplementation {
  AuthenticateUser: grpc.handleUnaryCall<_core_AuthenticateUserRequest__Output, _core_AuthenticateUserResponse>;
  
  CreateAuthorizationCode: grpc.handleUnaryCall<_core_CreateAuthorizationCodeRequest__Output, _core_CreateAuthorizationCodeResponse>;
  
  CreateToken: grpc.handleUnaryCall<_core_CreateTokenRequest__Output, _core_CreateTokenResponse>;
  
  CreateUser: grpc.handleUnaryCall<_core_CreateUserRequest__Output, _core_User>;
  
  GetAuthorizationServerMetadata: grpc.handleUnaryCall<_core_Empty__Output, _core_AuthorizationServerMetadata>;
  
  GetClient: grpc.handleUnaryCall<_core_GetClientRequest__Output, _core_Client>;
  
  GetJWKS: grpc.handleUnaryCall<_core_Empty__Output, _core_Jwks>;
  
  ListScopes: grpc.handleUnaryCall<_core_ListScopesRequest__Output, _core_ListScopesResponse>;
  
}

export interface AccountDefinition extends grpc.ServiceDefinition {
  AuthenticateUser: MethodDefinition<_core_AuthenticateUserRequest, _core_AuthenticateUserResponse, _core_AuthenticateUserRequest__Output, _core_AuthenticateUserResponse__Output>
  CreateAuthorizationCode: MethodDefinition<_core_CreateAuthorizationCodeRequest, _core_CreateAuthorizationCodeResponse, _core_CreateAuthorizationCodeRequest__Output, _core_CreateAuthorizationCodeResponse__Output>
  CreateToken: MethodDefinition<_core_CreateTokenRequest, _core_CreateTokenResponse, _core_CreateTokenRequest__Output, _core_CreateTokenResponse__Output>
  CreateUser: MethodDefinition<_core_CreateUserRequest, _core_User, _core_CreateUserRequest__Output, _core_User__Output>
  GetAuthorizationServerMetadata: MethodDefinition<_core_Empty, _core_AuthorizationServerMetadata, _core_Empty__Output, _core_AuthorizationServerMetadata__Output>
  GetClient: MethodDefinition<_core_GetClientRequest, _core_Client, _core_GetClientRequest__Output, _core_Client__Output>
  GetJWKS: MethodDefinition<_core_Empty, _core_Jwks, _core_Empty__Output, _core_Jwks__Output>
  ListScopes: MethodDefinition<_core_ListScopesRequest, _core_ListScopesResponse, _core_ListScopesRequest__Output, _core_ListScopesResponse__Output>
}
