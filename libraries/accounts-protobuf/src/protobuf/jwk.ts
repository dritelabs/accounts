import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  core: {
    Address: MessageTypeDefinition;
    AuthorizationServerMetadata: MessageTypeDefinition;
    Client: MessageTypeDefinition;
    DeleteRequest: MessageTypeDefinition;
    Empty: MessageTypeDefinition;
    GetRequest: MessageTypeDefinition;
    JWKS: MessageTypeDefinition;
    ListRequest: MessageTypeDefinition;
    PrivateJWK: MessageTypeDefinition;
    Profile: MessageTypeDefinition;
    PublicJWK: MessageTypeDefinition;
    Scope: MessageTypeDefinition;
    User: MessageTypeDefinition;
  };
  jwk: {
    AddJWKToClientRequest: MessageTypeDefinition;
    CreateJWKPairResponse: MessageTypeDefinition;
    DeleteJWKResponse: MessageTypeDefinition;
  };
}
