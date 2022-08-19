import { withIronSession } from '~/lib/session';
import { scope as scopeService } from '~/services';

export default withIronSession(async (event) => {
  const query = getQuery(event);
  const scopeNames = query?.names ? (query.names as string).split(' ') : [];

  try {
    const response = await scopeService.list({
      filter: {
        names: scopeNames
      }
    });

    return {
      items: response.scopes
    };
  } catch (error) {
    throw error;
  }
});
