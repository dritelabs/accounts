import { DataSource } from 'apollo-datasource';
import { decodeToken } from '@dritelabs/accounts-utils';
import { Context } from '~/graphql/context';

export class UserAPI extends DataSource {
  context?: Context;

  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  getCurrentUser() {
    return decodeToken(this.context.session.user.id_token);
  }
}
