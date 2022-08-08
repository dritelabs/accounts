import { ClientAPI, UserAPI } from './datasources/index';

export function dataSources() {
  return {
    clientAPI: new ClientAPI(),
    userAPI: new UserAPI()
  };
}
