// Original file: proto/accounts.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddJWKToClientRequest as _jwk_AddJWKToClientRequest, AddJWKToClientRequest__Output as _jwk_AddJWKToClientRequest__Output } from '../jwk/AddJWKToClientRequest';
import type { AuthenticateClientRequest as _client_AuthenticateClientRequest, AuthenticateClientRequest__Output as _client_AuthenticateClientRequest__Output } from '../client/AuthenticateClientRequest';
import type { AuthenticateUserRequest as _user_AuthenticateUserRequest, AuthenticateUserRequest__Output as _user_AuthenticateUserRequest__Output } from '../user/AuthenticateUserRequest';
import type { AuthenticateUserResponse as _user_AuthenticateUserResponse, AuthenticateUserResponse__Output as _user_AuthenticateUserResponse__Output } from '../user/AuthenticateUserResponse';
import type { AuthorizationServerMetadata as _core_AuthorizationServerMetadata, AuthorizationServerMetadata__Output as _core_AuthorizationServerMetadata__Output } from '../core/AuthorizationServerMetadata';
import type { Client as _core_Client, Client__Output as _core_Client__Output } from '../core/Client';
import type { CreateAuthorizationCodeRequest as _authorization_code_CreateAuthorizationCodeRequest, CreateAuthorizationCodeRequest__Output as _authorization_code_CreateAuthorizationCodeRequest__Output } from '../authorization_code/CreateAuthorizationCodeRequest';
import type { CreateAuthorizationCodeResponse as _authorization_code_CreateAuthorizationCodeResponse, CreateAuthorizationCodeResponse__Output as _authorization_code_CreateAuthorizationCodeResponse__Output } from '../authorization_code/CreateAuthorizationCodeResponse';
import type { CreateClientRequest as _client_CreateClientRequest, CreateClientRequest__Output as _client_CreateClientRequest__Output } from '../client/CreateClientRequest';
import type { CreateJWKPairResponse as _jwk_CreateJWKPairResponse, CreateJWKPairResponse__Output as _jwk_CreateJWKPairResponse__Output } from '../jwk/CreateJWKPairResponse';
import type { CreateTokenWithAuthorizationCodeRequest as _token_CreateTokenWithAuthorizationCodeRequest, CreateTokenWithAuthorizationCodeRequest__Output as _token_CreateTokenWithAuthorizationCodeRequest__Output } from '../token/CreateTokenWithAuthorizationCodeRequest';
import type { CreateTokenWithClientCredentialsRequest as _token_CreateTokenWithClientCredentialsRequest, CreateTokenWithClientCredentialsRequest__Output as _token_CreateTokenWithClientCredentialsRequest__Output } from '../token/CreateTokenWithClientCredentialsRequest';
import type { CreateUserRequest as _user_CreateUserRequest, CreateUserRequest__Output as _user_CreateUserRequest__Output } from '../user/CreateUserRequest';
import type { DeleteRequest as _core_DeleteRequest, DeleteRequest__Output as _core_DeleteRequest__Output } from '../core/DeleteRequest';
import type { Empty as _core_Empty, Empty__Output as _core_Empty__Output } from '../core/Empty';
import type { GetRequest as _core_GetRequest, GetRequest__Output as _core_GetRequest__Output } from '../core/GetRequest';
import type { IntrospectTokenRequest as _token_IntrospectTokenRequest, IntrospectTokenRequest__Output as _token_IntrospectTokenRequest__Output } from '../token/IntrospectTokenRequest';
import type { IntrospectTokenResponse as _token_IntrospectTokenResponse, IntrospectTokenResponse__Output as _token_IntrospectTokenResponse__Output } from '../token/IntrospectTokenResponse';
import type { InvalidateTokenRequest as _token_InvalidateTokenRequest, InvalidateTokenRequest__Output as _token_InvalidateTokenRequest__Output } from '../token/InvalidateTokenRequest';
import type { InvalidateTokenResponse as _token_InvalidateTokenResponse, InvalidateTokenResponse__Output as _token_InvalidateTokenResponse__Output } from '../token/InvalidateTokenResponse';
import type { JWKS as _core_JWKS, JWKS__Output as _core_JWKS__Output } from '../core/JWKS';
import type { ListClientsResponse as _client_ListClientsResponse, ListClientsResponse__Output as _client_ListClientsResponse__Output } from '../client/ListClientsResponse';
import type { ListRequest as _core_ListRequest, ListRequest__Output as _core_ListRequest__Output } from '../core/ListRequest';
import type { ListScopesResponse as _scope_ListScopesResponse, ListScopesResponse__Output as _scope_ListScopesResponse__Output } from '../scope/ListScopesResponse';
import type { PublicJWK as _core_PublicJWK, PublicJWK__Output as _core_PublicJWK__Output } from '../core/PublicJWK';
import type { RefreshTokenRequest as _token_RefreshTokenRequest, RefreshTokenRequest__Output as _token_RefreshTokenRequest__Output } from '../token/RefreshTokenRequest';
import type { RevokeTokenRequest as _token_RevokeTokenRequest, RevokeTokenRequest__Output as _token_RevokeTokenRequest__Output } from '../token/RevokeTokenRequest';
import type { RevokeTokenResponse as _token_RevokeTokenResponse, RevokeTokenResponse__Output as _token_RevokeTokenResponse__Output } from '../token/RevokeTokenResponse';
import type { TokenResponse as _token_TokenResponse, TokenResponse__Output as _token_TokenResponse__Output } from '../token/TokenResponse';
import type { UpdateClientRequest as _client_UpdateClientRequest, UpdateClientRequest__Output as _client_UpdateClientRequest__Output } from '../client/UpdateClientRequest';
import type { UpdateClientSecretRequest as _client_UpdateClientSecretRequest, UpdateClientSecretRequest__Output as _client_UpdateClientSecretRequest__Output } from '../client/UpdateClientSecretRequest';
import type { User as _core_User, User__Output as _core_User__Output } from '../core/User';
import type { ValidateTokenRequest as _token_ValidateTokenRequest, ValidateTokenRequest__Output as _token_ValidateTokenRequest__Output } from '../token/ValidateTokenRequest';
import type { ValidateTokenResponse as _token_ValidateTokenResponse, ValidateTokenResponse__Output as _token_ValidateTokenResponse__Output } from '../token/ValidateTokenResponse';

export interface AccountClient extends grpc.Client {
  AddJWKToClient(argument: _jwk_AddJWKToClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AddJWKToClient(argument: _jwk_AddJWKToClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AddJWKToClient(argument: _jwk_AddJWKToClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AddJWKToClient(argument: _jwk_AddJWKToClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  addJwkToClient(argument: _jwk_AddJWKToClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  addJwkToClient(argument: _jwk_AddJWKToClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  addJwkToClient(argument: _jwk_AddJWKToClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  addJwkToClient(argument: _jwk_AddJWKToClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  AuthenticateClientWithBasic(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AuthenticateClientWithBasic(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AuthenticateClientWithBasic(argument: _client_AuthenticateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AuthenticateClientWithBasic(argument: _client_AuthenticateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithBasic(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithBasic(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithBasic(argument: _client_AuthenticateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithBasic(argument: _client_AuthenticateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  AuthenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AuthenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AuthenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  AuthenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  authenticateClientWithPrivateKey(argument: _client_AuthenticateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  AuthenticateUser(argument: _user_AuthenticateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  AuthenticateUser(argument: _user_AuthenticateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  AuthenticateUser(argument: _user_AuthenticateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  AuthenticateUser(argument: _user_AuthenticateUserRequest, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _user_AuthenticateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _user_AuthenticateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _user_AuthenticateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  authenticateUser(argument: _user_AuthenticateUserRequest, callback: grpc.requestCallback<_user_AuthenticateUserResponse__Output>): grpc.ClientUnaryCall;
  
  CreateAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  CreateAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  CreateAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  CreateAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  createAuthorizationCode(argument: _authorization_code_CreateAuthorizationCodeRequest, callback: grpc.requestCallback<_authorization_code_CreateAuthorizationCodeResponse__Output>): grpc.ClientUnaryCall;
  
  CreateClient(argument: _client_CreateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  CreateClient(argument: _client_CreateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  CreateClient(argument: _client_CreateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  CreateClient(argument: _client_CreateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  createClient(argument: _client_CreateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  createClient(argument: _client_CreateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  createClient(argument: _client_CreateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  createClient(argument: _client_CreateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  CreateJWKPair(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  CreateJWKPair(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  CreateJWKPair(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  CreateJWKPair(argument: _core_Empty, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  createJwkPair(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  createJwkPair(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  createJwkPair(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  createJwkPair(argument: _core_Empty, callback: grpc.requestCallback<_jwk_CreateJWKPairResponse__Output>): grpc.ClientUnaryCall;
  
  CreateTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  CreateTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  CreateTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  CreateTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithAuthorizationCode(argument: _token_CreateTokenWithAuthorizationCodeRequest, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  
  CreateTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  CreateTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  CreateTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  CreateTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  createTokenWithClientCredentials(argument: _token_CreateTokenWithClientCredentialsRequest, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  
  CreateUser(argument: _user_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _user_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _user_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _user_CreateUserRequest, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _user_CreateUserRequest, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  
  DeleteClient(argument: _core_DeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  DeleteClient(argument: _core_DeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  DeleteClient(argument: _core_DeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  DeleteClient(argument: _core_DeleteRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  deleteClient(argument: _core_DeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  deleteClient(argument: _core_DeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  deleteClient(argument: _core_DeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  deleteClient(argument: _core_DeleteRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  DeleteJWK(argument: _core_DeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  DeleteJWK(argument: _core_DeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  DeleteJWK(argument: _core_DeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  DeleteJWK(argument: _core_DeleteRequest, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  deleteJwk(argument: _core_DeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  deleteJwk(argument: _core_DeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  deleteJwk(argument: _core_DeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  deleteJwk(argument: _core_DeleteRequest, callback: grpc.requestCallback<_core_PublicJWK__Output>): grpc.ClientUnaryCall;
  
  GetAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  GetAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  GetAuthorizationServerMetadata(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  GetAuthorizationServerMetadata(argument: _core_Empty, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  getAuthorizationServerMetadata(argument: _core_Empty, callback: grpc.requestCallback<_core_AuthorizationServerMetadata__Output>): grpc.ClientUnaryCall;
  
  GetClient(argument: _core_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  GetClient(argument: _core_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  GetClient(argument: _core_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  GetClient(argument: _core_GetRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  getClient(argument: _core_GetRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  GetJWKS(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  GetJWKS(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  GetJWKS(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  GetJWKS(argument: _core_Empty, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  getJwks(argument: _core_Empty, callback: grpc.requestCallback<_core_JWKS__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _core_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _core_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _core_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _core_GetRequest, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _core_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _core_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _core_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _core_GetRequest, callback: grpc.requestCallback<_core_User__Output>): grpc.ClientUnaryCall;
  
  InstrospectToken(argument: _token_IntrospectTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  InstrospectToken(argument: _token_IntrospectTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  InstrospectToken(argument: _token_IntrospectTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  InstrospectToken(argument: _token_IntrospectTokenRequest, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  instrospectToken(argument: _token_IntrospectTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  instrospectToken(argument: _token_IntrospectTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  instrospectToken(argument: _token_IntrospectTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  instrospectToken(argument: _token_IntrospectTokenRequest, callback: grpc.requestCallback<_token_IntrospectTokenResponse__Output>): grpc.ClientUnaryCall;
  
  InvalidateToken(argument: _token_InvalidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  InvalidateToken(argument: _token_InvalidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  InvalidateToken(argument: _token_InvalidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  InvalidateToken(argument: _token_InvalidateTokenRequest, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  invalidateToken(argument: _token_InvalidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  invalidateToken(argument: _token_InvalidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  invalidateToken(argument: _token_InvalidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  invalidateToken(argument: _token_InvalidateTokenRequest, callback: grpc.requestCallback<_token_InvalidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
  ListClients(argument: _core_ListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  ListClients(argument: _core_ListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  ListClients(argument: _core_ListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  ListClients(argument: _core_ListRequest, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  listClients(argument: _core_ListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  listClients(argument: _core_ListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  listClients(argument: _core_ListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  listClients(argument: _core_ListRequest, callback: grpc.requestCallback<_client_ListClientsResponse__Output>): grpc.ClientUnaryCall;
  
  ListScopes(argument: _core_ListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  ListScopes(argument: _core_ListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  ListScopes(argument: _core_ListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  ListScopes(argument: _core_ListRequest, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  listScopes(argument: _core_ListRequest, callback: grpc.requestCallback<_scope_ListScopesResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _token_RefreshTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _token_RefreshTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _token_RefreshTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _token_RefreshTokenRequest, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _token_RefreshTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _token_RefreshTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _token_RefreshTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _token_RefreshTokenRequest, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  
  RevokeToken(argument: _token_RevokeTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  RevokeToken(argument: _token_RevokeTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  RevokeToken(argument: _token_RevokeTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  RevokeToken(argument: _token_RevokeTokenRequest, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  revokeToken(argument: _token_RevokeTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  revokeToken(argument: _token_RevokeTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  revokeToken(argument: _token_RevokeTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  revokeToken(argument: _token_RevokeTokenRequest, callback: grpc.requestCallback<_token_RevokeTokenResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateClient(argument: _client_UpdateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  UpdateClient(argument: _client_UpdateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  UpdateClient(argument: _client_UpdateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  UpdateClient(argument: _client_UpdateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClient(argument: _client_UpdateClientRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClient(argument: _client_UpdateClientRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClient(argument: _client_UpdateClientRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClient(argument: _client_UpdateClientRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  UpdateClientSecret(argument: _client_UpdateClientSecretRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  UpdateClientSecret(argument: _client_UpdateClientSecretRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  UpdateClientSecret(argument: _client_UpdateClientSecretRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  UpdateClientSecret(argument: _client_UpdateClientSecretRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClientSecret(argument: _client_UpdateClientSecretRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClientSecret(argument: _client_UpdateClientSecretRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClientSecret(argument: _client_UpdateClientSecretRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  updateClientSecret(argument: _client_UpdateClientSecretRequest, callback: grpc.requestCallback<_core_Client__Output>): grpc.ClientUnaryCall;
  
  ValidateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _token_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _token_ValidateTokenRequest, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AccountHandlers extends grpc.UntypedServiceImplementation {
  AddJWKToClient: grpc.handleUnaryCall<_jwk_AddJWKToClientRequest__Output, _core_Client>;
  
  AuthenticateClientWithBasic: grpc.handleUnaryCall<_client_AuthenticateClientRequest__Output, _core_Client>;
  
  AuthenticateClientWithPrivateKey: grpc.handleUnaryCall<_client_AuthenticateClientRequest__Output, _core_Client>;
  
  AuthenticateUser: grpc.handleUnaryCall<_user_AuthenticateUserRequest__Output, _user_AuthenticateUserResponse>;
  
  CreateAuthorizationCode: grpc.handleUnaryCall<_authorization_code_CreateAuthorizationCodeRequest__Output, _authorization_code_CreateAuthorizationCodeResponse>;
  
  CreateClient: grpc.handleUnaryCall<_client_CreateClientRequest__Output, _core_Client>;
  
  CreateJWKPair: grpc.handleUnaryCall<_core_Empty__Output, _jwk_CreateJWKPairResponse>;
  
  CreateTokenWithAuthorizationCode: grpc.handleUnaryCall<_token_CreateTokenWithAuthorizationCodeRequest__Output, _token_TokenResponse>;
  
  CreateTokenWithClientCredentials: grpc.handleUnaryCall<_token_CreateTokenWithClientCredentialsRequest__Output, _token_TokenResponse>;
  
  CreateUser: grpc.handleUnaryCall<_user_CreateUserRequest__Output, _core_User>;
  
  DeleteClient: grpc.handleUnaryCall<_core_DeleteRequest__Output, _core_Client>;
  
  DeleteJWK: grpc.handleUnaryCall<_core_DeleteRequest__Output, _core_PublicJWK>;
  
  GetAuthorizationServerMetadata: grpc.handleUnaryCall<_core_Empty__Output, _core_AuthorizationServerMetadata>;
  
  GetClient: grpc.handleUnaryCall<_core_GetRequest__Output, _core_Client>;
  
  GetJWKS: grpc.handleUnaryCall<_core_Empty__Output, _core_JWKS>;
  
  GetUser: grpc.handleUnaryCall<_core_GetRequest__Output, _core_User>;
  
  InstrospectToken: grpc.handleUnaryCall<_token_IntrospectTokenRequest__Output, _token_IntrospectTokenResponse>;
  
  InvalidateToken: grpc.handleUnaryCall<_token_InvalidateTokenRequest__Output, _token_InvalidateTokenResponse>;
  
  ListClients: grpc.handleUnaryCall<_core_ListRequest__Output, _client_ListClientsResponse>;
  
  ListScopes: grpc.handleUnaryCall<_core_ListRequest__Output, _scope_ListScopesResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_token_RefreshTokenRequest__Output, _token_TokenResponse>;
  
  RevokeToken: grpc.handleUnaryCall<_token_RevokeTokenRequest__Output, _token_RevokeTokenResponse>;
  
  UpdateClient: grpc.handleUnaryCall<_client_UpdateClientRequest__Output, _core_Client>;
  
  UpdateClientSecret: grpc.handleUnaryCall<_client_UpdateClientSecretRequest__Output, _core_Client>;
  
  ValidateToken: grpc.handleUnaryCall<_token_ValidateTokenRequest__Output, _token_ValidateTokenResponse>;
  
}

export interface AccountDefinition extends grpc.ServiceDefinition {
  AddJWKToClient: MethodDefinition<_jwk_AddJWKToClientRequest, _core_Client, _jwk_AddJWKToClientRequest__Output, _core_Client__Output>
  AuthenticateClientWithBasic: MethodDefinition<_client_AuthenticateClientRequest, _core_Client, _client_AuthenticateClientRequest__Output, _core_Client__Output>
  AuthenticateClientWithPrivateKey: MethodDefinition<_client_AuthenticateClientRequest, _core_Client, _client_AuthenticateClientRequest__Output, _core_Client__Output>
  AuthenticateUser: MethodDefinition<_user_AuthenticateUserRequest, _user_AuthenticateUserResponse, _user_AuthenticateUserRequest__Output, _user_AuthenticateUserResponse__Output>
  CreateAuthorizationCode: MethodDefinition<_authorization_code_CreateAuthorizationCodeRequest, _authorization_code_CreateAuthorizationCodeResponse, _authorization_code_CreateAuthorizationCodeRequest__Output, _authorization_code_CreateAuthorizationCodeResponse__Output>
  CreateClient: MethodDefinition<_client_CreateClientRequest, _core_Client, _client_CreateClientRequest__Output, _core_Client__Output>
  CreateJWKPair: MethodDefinition<_core_Empty, _jwk_CreateJWKPairResponse, _core_Empty__Output, _jwk_CreateJWKPairResponse__Output>
  CreateTokenWithAuthorizationCode: MethodDefinition<_token_CreateTokenWithAuthorizationCodeRequest, _token_TokenResponse, _token_CreateTokenWithAuthorizationCodeRequest__Output, _token_TokenResponse__Output>
  CreateTokenWithClientCredentials: MethodDefinition<_token_CreateTokenWithClientCredentialsRequest, _token_TokenResponse, _token_CreateTokenWithClientCredentialsRequest__Output, _token_TokenResponse__Output>
  CreateUser: MethodDefinition<_user_CreateUserRequest, _core_User, _user_CreateUserRequest__Output, _core_User__Output>
  DeleteClient: MethodDefinition<_core_DeleteRequest, _core_Client, _core_DeleteRequest__Output, _core_Client__Output>
  DeleteJWK: MethodDefinition<_core_DeleteRequest, _core_PublicJWK, _core_DeleteRequest__Output, _core_PublicJWK__Output>
  GetAuthorizationServerMetadata: MethodDefinition<_core_Empty, _core_AuthorizationServerMetadata, _core_Empty__Output, _core_AuthorizationServerMetadata__Output>
  GetClient: MethodDefinition<_core_GetRequest, _core_Client, _core_GetRequest__Output, _core_Client__Output>
  GetJWKS: MethodDefinition<_core_Empty, _core_JWKS, _core_Empty__Output, _core_JWKS__Output>
  GetUser: MethodDefinition<_core_GetRequest, _core_User, _core_GetRequest__Output, _core_User__Output>
  InstrospectToken: MethodDefinition<_token_IntrospectTokenRequest, _token_IntrospectTokenResponse, _token_IntrospectTokenRequest__Output, _token_IntrospectTokenResponse__Output>
  InvalidateToken: MethodDefinition<_token_InvalidateTokenRequest, _token_InvalidateTokenResponse, _token_InvalidateTokenRequest__Output, _token_InvalidateTokenResponse__Output>
  ListClients: MethodDefinition<_core_ListRequest, _client_ListClientsResponse, _core_ListRequest__Output, _client_ListClientsResponse__Output>
  ListScopes: MethodDefinition<_core_ListRequest, _scope_ListScopesResponse, _core_ListRequest__Output, _scope_ListScopesResponse__Output>
  RefreshToken: MethodDefinition<_token_RefreshTokenRequest, _token_TokenResponse, _token_RefreshTokenRequest__Output, _token_TokenResponse__Output>
  RevokeToken: MethodDefinition<_token_RevokeTokenRequest, _token_RevokeTokenResponse, _token_RevokeTokenRequest__Output, _token_RevokeTokenResponse__Output>
  UpdateClient: MethodDefinition<_client_UpdateClientRequest, _core_Client, _client_UpdateClientRequest__Output, _core_Client__Output>
  UpdateClientSecret: MethodDefinition<_client_UpdateClientSecretRequest, _core_Client, _client_UpdateClientSecretRequest__Output, _core_Client__Output>
  ValidateToken: MethodDefinition<_token_ValidateTokenRequest, _token_ValidateTokenResponse, _token_ValidateTokenRequest__Output, _token_ValidateTokenResponse__Output>
}
