FROM node:16-buster AS deps

ARG GRPC_HEALTH_PROBE_VERSION=v0.3.1

WORKDIR /usr/src/accounts

COPY . .

RUN node ./common/scripts/install-run-rush.js change -v
RUN node ./common/scripts/install-run-rush.js install
# RUN node ./common/scripts/install-run-rush.js gen --to @dritelabs/accounts-server
RUN node ./common/scripts/install-run-rush.js build --to @dritelabs/accounts-server
RUN node ./common/scripts/install-run-rush.js deploy --overwrite -s accounts-server


RUN wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
  chmod +x /bin/grpc_health_probe

FROM node:lts-alpine AS release

WORKDIR /usr/src/accounts

COPY --from=deps /bin/grpc_health_probe /bin/
COPY --from=deps /usr/src/accounts/common/deploy /usr/src/accounts
COPY --from=deps /usr/src/accounts/common/temp/node_modules/@prisma/client /usr/src/accounts/common/temp/node_modules/@prisma/client
COPY --from=deps /usr/src/accounts/common/temp/node_modules/.prisma/client /usr/src/accounts/common/temp/node_modules/.prisma/client

ENV HOST 0.0.0.0
ENV PORT 8000
ENV NODE_ENV production

CMD [ "node", "/usr/src/accounts/apps/accounts-server/dist/index.mjs"]