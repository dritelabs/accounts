// package: accounts
// file: accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as accounts_pb from "./accounts_pb";
import * as core_pb from "./core_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IAccountsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticateUser: IAccountsService_IAuthenticateUser;
    createAuthorizationCode: IAccountsService_ICreateAuthorizationCode;
    createToken: IAccountsService_ICreateToken;
    createUser: IAccountsService_ICreateUser;
    getAuthorizationServerMetadata: IAccountsService_IGetAuthorizationServerMetadata;
    getClient: IAccountsService_IGetClient;
    getJWKS: IAccountsService_IGetJWKS;
    listScopes: IAccountsService_IListScopes;
}

interface IAccountsService_IAuthenticateUser extends grpc.MethodDefinition<core_pb.AuthenticateUserRequest, core_pb.AuthenticateUserResponse> {
    path: "/accounts.Accounts/AuthenticateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<core_pb.AuthenticateUserRequest>;
    requestDeserialize: grpc.deserialize<core_pb.AuthenticateUserRequest>;
    responseSerialize: grpc.serialize<core_pb.AuthenticateUserResponse>;
    responseDeserialize: grpc.deserialize<core_pb.AuthenticateUserResponse>;
}
interface IAccountsService_ICreateAuthorizationCode extends grpc.MethodDefinition<core_pb.CreateAuthorizationCodeRequest, core_pb.CreateAuthorizationCodeResponse> {
    path: "/accounts.Accounts/CreateAuthorizationCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<core_pb.CreateAuthorizationCodeRequest>;
    requestDeserialize: grpc.deserialize<core_pb.CreateAuthorizationCodeRequest>;
    responseSerialize: grpc.serialize<core_pb.CreateAuthorizationCodeResponse>;
    responseDeserialize: grpc.deserialize<core_pb.CreateAuthorizationCodeResponse>;
}
interface IAccountsService_ICreateToken extends grpc.MethodDefinition<core_pb.CreateTokenRequest, core_pb.CreateTokenResponse> {
    path: "/accounts.Accounts/CreateToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<core_pb.CreateTokenRequest>;
    requestDeserialize: grpc.deserialize<core_pb.CreateTokenRequest>;
    responseSerialize: grpc.serialize<core_pb.CreateTokenResponse>;
    responseDeserialize: grpc.deserialize<core_pb.CreateTokenResponse>;
}
interface IAccountsService_ICreateUser extends grpc.MethodDefinition<core_pb.CreateUserRequest, core_pb.User> {
    path: "/accounts.Accounts/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<core_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<core_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<core_pb.User>;
    responseDeserialize: grpc.deserialize<core_pb.User>;
}
interface IAccountsService_IGetAuthorizationServerMetadata extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_struct_pb.Struct> {
    path: "/accounts.Accounts/GetAuthorizationServerMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_struct_pb.Struct>;
    responseDeserialize: grpc.deserialize<google_protobuf_struct_pb.Struct>;
}
interface IAccountsService_IGetClient extends grpc.MethodDefinition<core_pb.GetClientRequest, core_pb.Client> {
    path: "/accounts.Accounts/GetClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<core_pb.GetClientRequest>;
    requestDeserialize: grpc.deserialize<core_pb.GetClientRequest>;
    responseSerialize: grpc.serialize<core_pb.Client>;
    responseDeserialize: grpc.deserialize<core_pb.Client>;
}
interface IAccountsService_IGetJWKS extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_struct_pb.Struct> {
    path: "/accounts.Accounts/GetJWKS";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_struct_pb.Struct>;
    responseDeserialize: grpc.deserialize<google_protobuf_struct_pb.Struct>;
}
interface IAccountsService_IListScopes extends grpc.MethodDefinition<core_pb.ListScopesRequest, core_pb.ListScopesResponse> {
    path: "/accounts.Accounts/ListScopes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<core_pb.ListScopesRequest>;
    requestDeserialize: grpc.deserialize<core_pb.ListScopesRequest>;
    responseSerialize: grpc.serialize<core_pb.ListScopesResponse>;
    responseDeserialize: grpc.deserialize<core_pb.ListScopesResponse>;
}

export const AccountsService: IAccountsService;

export interface IAccountsServer extends grpc.UntypedServiceImplementation {
    authenticateUser: grpc.handleUnaryCall<core_pb.AuthenticateUserRequest, core_pb.AuthenticateUserResponse>;
    createAuthorizationCode: grpc.handleUnaryCall<core_pb.CreateAuthorizationCodeRequest, core_pb.CreateAuthorizationCodeResponse>;
    createToken: grpc.handleUnaryCall<core_pb.CreateTokenRequest, core_pb.CreateTokenResponse>;
    createUser: grpc.handleUnaryCall<core_pb.CreateUserRequest, core_pb.User>;
    getAuthorizationServerMetadata: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_struct_pb.Struct>;
    getClient: grpc.handleUnaryCall<core_pb.GetClientRequest, core_pb.Client>;
    getJWKS: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_struct_pb.Struct>;
    listScopes: grpc.handleUnaryCall<core_pb.ListScopesRequest, core_pb.ListScopesResponse>;
}

export interface IAccountsClient {
    authenticateUser(request: core_pb.AuthenticateUserRequest, callback: (error: grpc.ServiceError | null, response: core_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authenticateUser(request: core_pb.AuthenticateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authenticateUser(request: core_pb.AuthenticateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: core_pb.CreateAuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: core_pb.CreateAuthorizationCodeResponse) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: core_pb.CreateAuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.CreateAuthorizationCodeResponse) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: core_pb.CreateAuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.CreateAuthorizationCodeResponse) => void): grpc.ClientUnaryCall;
    createToken(request: core_pb.CreateTokenRequest, callback: (error: grpc.ServiceError | null, response: core_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    createToken(request: core_pb.CreateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    createToken(request: core_pb.CreateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    createUser(request: core_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: core_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: core_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: core_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.User) => void): grpc.ClientUnaryCall;
    getAuthorizationServerMetadata(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    getAuthorizationServerMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    getAuthorizationServerMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    getClient(request: core_pb.GetClientRequest, callback: (error: grpc.ServiceError | null, response: core_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: core_pb.GetClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: core_pb.GetClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.Client) => void): grpc.ClientUnaryCall;
    getJWKS(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    getJWKS(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    getJWKS(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    listScopes(request: core_pb.ListScopesRequest, callback: (error: grpc.ServiceError | null, response: core_pb.ListScopesResponse) => void): grpc.ClientUnaryCall;
    listScopes(request: core_pb.ListScopesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.ListScopesResponse) => void): grpc.ClientUnaryCall;
    listScopes(request: core_pb.ListScopesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.ListScopesResponse) => void): grpc.ClientUnaryCall;
}

export class AccountsClient extends grpc.Client implements IAccountsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public authenticateUser(request: core_pb.AuthenticateUserRequest, callback: (error: grpc.ServiceError | null, response: core_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: core_pb.AuthenticateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: core_pb.AuthenticateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: core_pb.CreateAuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: core_pb.CreateAuthorizationCodeResponse) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: core_pb.CreateAuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.CreateAuthorizationCodeResponse) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: core_pb.CreateAuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.CreateAuthorizationCodeResponse) => void): grpc.ClientUnaryCall;
    public createToken(request: core_pb.CreateTokenRequest, callback: (error: grpc.ServiceError | null, response: core_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    public createToken(request: core_pb.CreateTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    public createToken(request: core_pb.CreateTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.CreateTokenResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: core_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: core_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: core_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: core_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.User) => void): grpc.ClientUnaryCall;
    public getAuthorizationServerMetadata(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public getAuthorizationServerMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public getAuthorizationServerMetadata(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public getClient(request: core_pb.GetClientRequest, callback: (error: grpc.ServiceError | null, response: core_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: core_pb.GetClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: core_pb.GetClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.Client) => void): grpc.ClientUnaryCall;
    public getJWKS(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public getJWKS(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public getJWKS(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_struct_pb.Struct) => void): grpc.ClientUnaryCall;
    public listScopes(request: core_pb.ListScopesRequest, callback: (error: grpc.ServiceError | null, response: core_pb.ListScopesResponse) => void): grpc.ClientUnaryCall;
    public listScopes(request: core_pb.ListScopesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: core_pb.ListScopesResponse) => void): grpc.ClientUnaryCall;
    public listScopes(request: core_pb.ListScopesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: core_pb.ListScopesResponse) => void): grpc.ClientUnaryCall;
}
