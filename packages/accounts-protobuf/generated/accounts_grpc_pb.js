// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var core_pb = require('./core_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_core_AuthenticateUserRequest(arg) {
  if (!(arg instanceof core_pb.AuthenticateUserRequest)) {
    throw new Error('Expected argument of type core.AuthenticateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_AuthenticateUserRequest(buffer_arg) {
  return core_pb.AuthenticateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_AuthenticateUserResponse(arg) {
  if (!(arg instanceof core_pb.AuthenticateUserResponse)) {
    throw new Error('Expected argument of type core.AuthenticateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_AuthenticateUserResponse(buffer_arg) {
  return core_pb.AuthenticateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_Client(arg) {
  if (!(arg instanceof core_pb.Client)) {
    throw new Error('Expected argument of type core.Client');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_Client(buffer_arg) {
  return core_pb.Client.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_CreateAuthorizationCodeRequest(arg) {
  if (!(arg instanceof core_pb.CreateAuthorizationCodeRequest)) {
    throw new Error('Expected argument of type core.CreateAuthorizationCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_CreateAuthorizationCodeRequest(buffer_arg) {
  return core_pb.CreateAuthorizationCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_CreateAuthorizationCodeResponse(arg) {
  if (!(arg instanceof core_pb.CreateAuthorizationCodeResponse)) {
    throw new Error('Expected argument of type core.CreateAuthorizationCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_CreateAuthorizationCodeResponse(buffer_arg) {
  return core_pb.CreateAuthorizationCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_CreateTokenRequest(arg) {
  if (!(arg instanceof core_pb.CreateTokenRequest)) {
    throw new Error('Expected argument of type core.CreateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_CreateTokenRequest(buffer_arg) {
  return core_pb.CreateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_CreateTokenResponse(arg) {
  if (!(arg instanceof core_pb.CreateTokenResponse)) {
    throw new Error('Expected argument of type core.CreateTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_CreateTokenResponse(buffer_arg) {
  return core_pb.CreateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_CreateUserRequest(arg) {
  if (!(arg instanceof core_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type core.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_CreateUserRequest(buffer_arg) {
  return core_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_GetClientRequest(arg) {
  if (!(arg instanceof core_pb.GetClientRequest)) {
    throw new Error('Expected argument of type core.GetClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_GetClientRequest(buffer_arg) {
  return core_pb.GetClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_ListScopesRequest(arg) {
  if (!(arg instanceof core_pb.ListScopesRequest)) {
    throw new Error('Expected argument of type core.ListScopesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_ListScopesRequest(buffer_arg) {
  return core_pb.ListScopesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_ListScopesResponse(arg) {
  if (!(arg instanceof core_pb.ListScopesResponse)) {
    throw new Error('Expected argument of type core.ListScopesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_ListScopesResponse(buffer_arg) {
  return core_pb.ListScopesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_core_User(arg) {
  if (!(arg instanceof core_pb.User)) {
    throw new Error('Expected argument of type core.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_core_User(buffer_arg) {
  return core_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Struct(arg) {
  if (!(arg instanceof google_protobuf_struct_pb.Struct)) {
    throw new Error('Expected argument of type google.protobuf.Struct');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Struct(buffer_arg) {
  return google_protobuf_struct_pb.Struct.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsService = exports.AccountsService = {
  createUser: {
    path: '/accounts.Accounts/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.CreateUserRequest,
    responseType: core_pb.User,
    requestSerialize: serialize_core_CreateUserRequest,
    requestDeserialize: deserialize_core_CreateUserRequest,
    responseSerialize: serialize_core_User,
    responseDeserialize: deserialize_core_User,
  },
  authenticateUser: {
    path: '/accounts.Accounts/AuthenticateUser',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.AuthenticateUserRequest,
    responseType: core_pb.AuthenticateUserResponse,
    requestSerialize: serialize_core_AuthenticateUserRequest,
    requestDeserialize: deserialize_core_AuthenticateUserRequest,
    responseSerialize: serialize_core_AuthenticateUserResponse,
    responseDeserialize: deserialize_core_AuthenticateUserResponse,
  },
  getAuthorizationServerMetadata: {
    path: '/accounts.Accounts/GetAuthorizationServerMetadata',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_struct_pb.Struct,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Struct,
    responseDeserialize: deserialize_google_protobuf_Struct,
  },
  getJWKS: {
    path: '/accounts.Accounts/GetJWKS',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_struct_pb.Struct,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Struct,
    responseDeserialize: deserialize_google_protobuf_Struct,
  },
  createToken: {
    path: '/accounts.Accounts/CreateToken',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.CreateTokenRequest,
    responseType: core_pb.CreateTokenResponse,
    requestSerialize: serialize_core_CreateTokenRequest,
    requestDeserialize: deserialize_core_CreateTokenRequest,
    responseSerialize: serialize_core_CreateTokenResponse,
    responseDeserialize: deserialize_core_CreateTokenResponse,
  },
  getClient: {
    path: '/accounts.Accounts/GetClient',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.GetClientRequest,
    responseType: core_pb.Client,
    requestSerialize: serialize_core_GetClientRequest,
    requestDeserialize: deserialize_core_GetClientRequest,
    responseSerialize: serialize_core_Client,
    responseDeserialize: deserialize_core_Client,
  },
  createAuthorizationCode: {
    path: '/accounts.Accounts/CreateAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.CreateAuthorizationCodeRequest,
    responseType: core_pb.CreateAuthorizationCodeResponse,
    requestSerialize: serialize_core_CreateAuthorizationCodeRequest,
    requestDeserialize: deserialize_core_CreateAuthorizationCodeRequest,
    responseSerialize: serialize_core_CreateAuthorizationCodeResponse,
    responseDeserialize: deserialize_core_CreateAuthorizationCodeResponse,
  },
  listScopes: {
    path: '/accounts.Accounts/ListScopes',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.ListScopesRequest,
    responseType: core_pb.ListScopesResponse,
    requestSerialize: serialize_core_ListScopesRequest,
    requestDeserialize: deserialize_core_ListScopesRequest,
    responseSerialize: serialize_core_ListScopesResponse,
    responseDeserialize: deserialize_core_ListScopesResponse,
  },
};

exports.AccountsClient = grpc.makeGenericClientConstructor(AccountsService);
