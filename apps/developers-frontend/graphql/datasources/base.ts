import { DataSource } from 'apollo-datasource';
import { Context } from '~/graphql/context';

export class BaseDataSource extends DataSource {
  context?: Context;

  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  refreshToken() {}
}
