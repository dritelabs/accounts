FROM node:16-buster AS deps

WORKDIR /usr/src/accounts

COPY ./ ./

RUN node ./common/scripts/install-run-rush.js install
RUN node ./common/scripts/install-run-rush.js gen
RUN node ./common/scripts/install-run-rush.js build && echo 0
RUN node ./common/scripts/install-run-rush.js deploy --overwrite -s accounts-frontend

FROM node:lts-alpine AS release

WORKDIR /usr/src/accounts

COPY --from=deps /usr/src/accounts/apps/accounts-frontend/.output /usr/src/accounts/apps/accounts-frontend/.output
COPY --from=deps /usr/src/accounts/apps/accounts-frontend/node_modules /usr/src/accounts/apps/accounts-frontend/node_modules
COPY --from=deps /usr/src/accounts/common /usr/src/accounts/common
COPY --from=deps /usr/src/accounts/libraries/accounts-errors/dist /usr/src/accounts/libraries/accounts-errors/dist
COPY --from=deps /usr/src/accounts/libraries/accounts-errors/package.json /usr/src/accounts/libraries/accounts-errors/
COPY --from=deps /usr/src/accounts/libraries/accounts-utils/dist /usr/src/accounts/libraries/accounts-utils/dist
COPY --from=deps /usr/src/accounts/libraries/accounts-utils/package.json /usr/src/accounts/libraries/accounts-utils/
COPY --from=deps /usr/src/accounts/libraries/accounts-protobuf/dist /usr/src/accounts/libraries/accounts-protobuf/dist
COPY --from=deps /usr/src/accounts/libraries/accounts-protobuf/package.json /usr/src/accounts/libraries/accounts-protobuf/

ENV HOST 0.0.0.0
ENV PORT 8000
ENV NODE_ENV production

CMD [ "node", "/usr/src/accounts/apps/accounts-frontend/.output/server/index.mjs"]