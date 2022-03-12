FROM node:16-buster AS deps

ARG GRPC_HEALTH_PROBE_VERSION=v0.3.1

WORKDIR /usr/src/accounts

COPY ./package*.json ./lerna.json ./
COPY ./packages/accounts-db/package.json ./packages/accounts-db/
COPY ./packages/accounts-utils/package.json ./packages/accounts-utils/
COPY ./packages/accounts-protobuf/package.json ./packages/accounts-protobuf/
COPY ./packages/accounts-server/package.json ./packages/accounts-server/

RUN npm ci

RUN wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
  chmod +x /bin/grpc_health_probe

#
# ---- Test ----
# run linters and tests
# FROM deps AS test
# COPY . .
# RUN  npm run lint 


FROM node:16-buster AS builder

WORKDIR /usr/src/accounts

COPY --from=deps /usr/src/accounts/package*.json /usr/src/accounts/lerna.json ./
COPY --from=deps /usr/src/accounts/node_modules ./node_modules
COPY ./packages/accounts-db ./packages/accounts-db
COPY ./packages/accounts-utils ./packages/accounts-utils
COPY ./packages/accounts-protobuf ./packages/accounts-protobuf
COPY ./packages/accounts-server ./packages/accounts-server

RUN npm run generate
RUN npm run build

RUN cp -R node_modules node_modules_development
RUN npm ci --only=production

FROM node:16-alpine AS release

WORKDIR /usr/src/accounts

COPY --from=deps /bin/grpc_health_probe /bin/
COPY --from=builder /usr/src/accounts/package*.json /usr/src/accounts/lerna.json ./
COPY --from=builder /usr/src/accounts/node_modules ./node_modules
COPY --from=builder /usr/src/accounts/node_modules_development/@prisma/client/ ./node_modules/@prisma/client/
COPY --from=builder /usr/src/accounts/node_modules_development/.prisma/client/ ./node_modules/.prisma/client/
COPY --from=builder /usr/src/accounts/packages/accounts-db/dist  /usr/src/accounts/packages/accounts-db/dist
COPY --from=builder /usr/src/accounts/packages/accounts-db/package.json  /usr/src/accounts/packages/accounts-db/
COPY --from=builder /usr/src/accounts/packages/accounts-utils/dist  /usr/src/accounts/packages/accounts-utils/dist
COPY --from=builder /usr/src/accounts/packages/accounts-utils/package.json  /usr/src/accounts/packages/accounts-utils/
COPY --from=builder /usr/src/accounts/packages/accounts-protobuf/dist /usr/src/accounts/packages/accounts-protobuf/dist
COPY --from=builder /usr/src/accounts/packages/accounts-protobuf/protobuf /usr/src/accounts/packages/accounts-protobuf/protobuf
COPY --from=builder /usr/src/accounts/packages/accounts-protobuf/package.json /usr/src/accounts/packages/accounts-protobuf/
COPY --from=builder /usr/src/accounts/packages/accounts-server/dist  /usr/src/accounts/packages/accounts-server/dist
COPY --from=builder /usr/src/accounts/packages/accounts-server/package.json  /usr/src/accounts/packages/accounts-server/

ENV HOST 0.0.0.0
ENV PORT 5000
ENV NODE_ENV production

CMD [ "npm", "start", "-w", "@driten/accounts-server"]
