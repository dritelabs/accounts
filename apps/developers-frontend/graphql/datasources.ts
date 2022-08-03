import { ClientAPI } from './datasources/index';

export function dataSources() {
  return {
    clientAPI: new ClientAPI()
  };
}
