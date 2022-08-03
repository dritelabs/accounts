import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  token: {
    CreateTokenRequest: MessageTypeDefinition;
    CreateTokenResponse: MessageTypeDefinition;
    InvalidateTokenRequest: MessageTypeDefinition;
    InvalidateTokenResponse: MessageTypeDefinition;
    ValidateTokenRequest: MessageTypeDefinition;
    ValidateTokenResponse: MessageTypeDefinition;
  };
}
