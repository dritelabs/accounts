FROM node:16-buster AS deps

WORKDIR /usr/src/accounts

COPY . .

RUN node ./common/scripts/install-run-rush.js change -v
RUN node ./common/scripts/install-run-rush.js install
# RUN node ./common/scripts/install-run-rush.js gen --to @dritelabs/accounts-frontend
RUN node ./common/scripts/install-run-rush.js build --to @dritelabs/accounts-frontend
RUN node ./common/scripts/install-run-rush.js deploy --overwrite -s accounts-frontend

FROM node:lts-alpine AS release

WORKDIR /usr/src/accounts

COPY --from=deps /usr/src/accounts/common/deploy /usr/src/accounts

ENV HOST 0.0.0.0
ENV PORT 8000
ENV NODE_ENV production

CMD [ "node", "/usr/src/accounts/apps/accounts-frontend/.output/server/index.mjs"]