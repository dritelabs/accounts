import { ApolloServer, cors } from "@driten/apollo-server-h3";
import { withIronSession } from "~/lib/session";
import { context, dataSources, schema } from "~/graphql";

const apolloServer = new ApolloServer({
  schema,
  dataSources,
  context,
});

export default defineLazyEventHandler(async () => {
  await apolloServer.start();
  const _cors = cors();

  const handler = apolloServer.createHandler({
    path: "/api/graphql",
    disableHealthCheck: true,
  });

  return _cors(
    withIronSession(async (event) => {
      return event.req.method === "OPTIONS" ? "ok" : handler(event);
    })
  );
});
