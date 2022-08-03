// Original file: proto/core.proto

export interface ListRequest {
  parent?: string;
  pageSize?: number;
  pageToken?: string;
}

export interface ListRequest__Output {
  parent: string;
  pageSize: number;
  pageToken: string;
}
