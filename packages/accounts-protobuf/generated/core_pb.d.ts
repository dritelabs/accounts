// package: core
// file: core.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Client extends jspb.Message { 
    getId(): string;
    setId(value: string): Client;
    getUserId(): string;
    setUserId(value: string): Client;
    clearRedirectUriList(): void;
    getRedirectUriList(): Array<string>;
    setRedirectUriList(value: Array<string>): Client;
    addRedirectUri(value: string, index?: number): string;
    getTokenEndpointAuthMethod(): string;
    setTokenEndpointAuthMethod(value: string): Client;
    clearGrantTypeList(): void;
    getGrantTypeList(): Array<string>;
    setGrantTypeList(value: Array<string>): Client;
    addGrantType(value: string, index?: number): string;
    clearResponseTypeList(): void;
    getResponseTypeList(): Array<string>;
    setResponseTypeList(value: Array<string>): Client;
    addResponseType(value: string, index?: number): string;
    getApplicationType(): string;
    setApplicationType(value: string): Client;
    getName(): string;
    setName(value: string): Client;
    getDescription(): string;
    setDescription(value: string): Client;
    getSecret(): string;
    setSecret(value: string): Client;
    getClientUri(): string;
    setClientUri(value: string): Client;
    getLogoUri(): string;
    setLogoUri(value: string): Client;
    getScope(): string;
    setScope(value: string): Client;
    clearContactList(): void;
    getContactList(): Array<string>;
    setContactList(value: Array<string>): Client;
    addContact(value: string, index?: number): string;
    getTosUri(): string;
    setTosUri(value: string): Client;
    getPolicyUri(): string;
    setPolicyUri(value: string): Client;
    getJwksUri(): string;
    setJwksUri(value: string): Client;

    hasJwks(): boolean;
    clearJwks(): void;
    getJwks(): google_protobuf_struct_pb.Struct | undefined;
    setJwks(value?: google_protobuf_struct_pb.Struct): Client;
    getSoftwareId(): string;
    setSoftwareId(value: string): Client;
    getSoftwareVersion(): string;
    setSoftwareVersion(value: string): Client;
    getUser(): string;
    setUser(value: string): Client;
    getCreatedAt(): number;
    setCreatedAt(value: number): Client;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): Client;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
    export type AsObject = {
        id: string,
        userId: string,
        redirectUriList: Array<string>,
        tokenEndpointAuthMethod: string,
        grantTypeList: Array<string>,
        responseTypeList: Array<string>,
        applicationType: string,
        name: string,
        description: string,
        secret: string,
        clientUri: string,
        logoUri: string,
        scope: string,
        contactList: Array<string>,
        tosUri: string,
        policyUri: string,
        jwksUri: string,
        jwks?: google_protobuf_struct_pb.Struct.AsObject,
        softwareId: string,
        softwareVersion: string,
        user: string,
        createdAt: number,
        updatedAt: number,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;
    getCreatedAt(): string;
    setCreatedAt(value: string): User;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        email: string,
        username: string,
        password: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class Scope extends jspb.Message { 
    getId(): string;
    setId(value: string): Scope;
    getName(): string;
    setName(value: string): Scope;
    getDescription(): string;
    setDescription(value: string): Scope;
    getDisplayName(): string;
    setDisplayName(value: string): Scope;
    getCreatedAt(): string;
    setCreatedAt(value: string): Scope;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Scope;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scope.AsObject;
    static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scope;
    static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
}

export namespace Scope {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        displayName: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class GetClientRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetClientRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClientRequest): GetClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClientRequest;
    static deserializeBinaryFromReader(message: GetClientRequest, reader: jspb.BinaryReader): GetClientRequest;
}

export namespace GetClientRequest {
    export type AsObject = {
        id: string,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class AuthenticateUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): AuthenticateUserRequest;
    getPassword(): string;
    setPassword(value: string): AuthenticateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateUserRequest): AuthenticateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateUserRequest;
    static deserializeBinaryFromReader(message: AuthenticateUserRequest, reader: jspb.BinaryReader): AuthenticateUserRequest;
}

export namespace AuthenticateUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class AuthenticateUserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): AuthenticateUserResponse;
    getEmail(): string;
    setEmail(value: string): AuthenticateUserResponse;
    getInitialAccessToken(): string;
    setInitialAccessToken(value: string): AuthenticateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateUserResponse): AuthenticateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateUserResponse;
    static deserializeBinaryFromReader(message: AuthenticateUserResponse, reader: jspb.BinaryReader): AuthenticateUserResponse;
}

export namespace AuthenticateUserResponse {
    export type AsObject = {
        id: string,
        email: string,
        initialAccessToken: string,
    }
}

export class CreateTokenRequest extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): CreateTokenRequest;
    getScope(): string;
    setScope(value: string): CreateTokenRequest;
    getSub(): string;
    setSub(value: string): CreateTokenRequest;
    getExp(): string;
    setExp(value: string): CreateTokenRequest;
    clearAudList(): void;
    getAudList(): Array<string>;
    setAudList(value: Array<string>): CreateTokenRequest;
    addAud(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTokenRequest): CreateTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTokenRequest;
    static deserializeBinaryFromReader(message: CreateTokenRequest, reader: jspb.BinaryReader): CreateTokenRequest;
}

export namespace CreateTokenRequest {
    export type AsObject = {
        clientId: string,
        scope: string,
        sub: string,
        exp: string,
        audList: Array<string>,
    }
}

export class CreateTokenResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CreateTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTokenResponse): CreateTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTokenResponse;
    static deserializeBinaryFromReader(message: CreateTokenResponse, reader: jspb.BinaryReader): CreateTokenResponse;
}

export namespace CreateTokenResponse {
    export type AsObject = {
        token: string,
    }
}

export class CreateAuthorizationCodeRequest extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): CreateAuthorizationCodeRequest;
    getSub(): string;
    setSub(value: string): CreateAuthorizationCodeRequest;
    getCodeChallenge(): string;
    setCodeChallenge(value: string): CreateAuthorizationCodeRequest;
    getCodeChallengeMethod(): string;
    setCodeChallengeMethod(value: string): CreateAuthorizationCodeRequest;
    getRedirectUri(): string;
    setRedirectUri(value: string): CreateAuthorizationCodeRequest;
    getScope(): string;
    setScope(value: string): CreateAuthorizationCodeRequest;
    clearAudList(): void;
    getAudList(): Array<string>;
    setAudList(value: Array<string>): CreateAuthorizationCodeRequest;
    addAud(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAuthorizationCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAuthorizationCodeRequest): CreateAuthorizationCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAuthorizationCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAuthorizationCodeRequest;
    static deserializeBinaryFromReader(message: CreateAuthorizationCodeRequest, reader: jspb.BinaryReader): CreateAuthorizationCodeRequest;
}

export namespace CreateAuthorizationCodeRequest {
    export type AsObject = {
        clientId: string,
        sub: string,
        codeChallenge: string,
        codeChallengeMethod: string,
        redirectUri: string,
        scope: string,
        audList: Array<string>,
    }
}

export class CreateAuthorizationCodeResponse extends jspb.Message { 
    getCode(): string;
    setCode(value: string): CreateAuthorizationCodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAuthorizationCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAuthorizationCodeResponse): CreateAuthorizationCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAuthorizationCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAuthorizationCodeResponse;
    static deserializeBinaryFromReader(message: CreateAuthorizationCodeResponse, reader: jspb.BinaryReader): CreateAuthorizationCodeResponse;
}

export namespace CreateAuthorizationCodeResponse {
    export type AsObject = {
        code: string,
    }
}

export class ListScopesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListScopesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListScopesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListScopesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScopesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListScopesRequest): ListScopesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScopesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScopesRequest;
    static deserializeBinaryFromReader(message: ListScopesRequest, reader: jspb.BinaryReader): ListScopesRequest;
}

export namespace ListScopesRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListScopesResponse extends jspb.Message { 
    clearScopeList(): void;
    getScopeList(): Array<Scope>;
    setScopeList(value: Array<Scope>): ListScopesResponse;
    addScope(value?: Scope, index?: number): Scope;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListScopesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScopesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListScopesResponse): ListScopesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScopesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScopesResponse;
    static deserializeBinaryFromReader(message: ListScopesResponse, reader: jspb.BinaryReader): ListScopesResponse;
}

export namespace ListScopesResponse {
    export type AsObject = {
        scopeList: Array<Scope.AsObject>,
        nextPageToken: string,
    }
}
