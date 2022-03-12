FROM node:16-buster AS deps

WORKDIR /usr/src/accounts

COPY ./package*.json ./lerna.json ./
COPY ./packages/accounts-errors/package.json ./packages/accounts-errors/
COPY ./packages/accounts-jwt-verifier/package.json ./packages/accounts-jwt-verifier/
COPY ./packages/accounts-protobuf/package.json ./packages/accounts-protobuf/
COPY ./packages/accounts-utils/package.json ./packages/accounts-utils/
COPY ./packages/accounts-frontend/package.json ./packages/accounts-frontend/

RUN npm ci

# ---- Test ----
# FROM deps AS test
# COPY . .
# RUN  npm run lint 

FROM node:16-buster AS builder

WORKDIR /usr/src/accounts

COPY --from=deps /usr/src/accounts/package*.json /usr/src/accounts/lerna.json ./
COPY --from=deps /usr/src/accounts/node_modules ./node_modules
COPY ./packages/accounts-errors ./packages/accounts-errors
COPY ./packages/accounts-jwt-verifier ./packages/accounts-jwt-verifier
COPY ./packages/accounts-protobuf ./packages/accounts-protobuf
COPY ./packages/accounts-utils ./packages/accounts-utils
COPY ./packages/accounts-frontend ./packages/accounts-frontend

RUN npm run generate
RUN npm run build

RUN cp -R node_modules node_modules_development
RUN npm ci --only=production

FROM node:16-alpine AS release

WORKDIR /usr/src/accounts

COPY --from=builder /usr/src/accounts/package*.json /usr/src/accounts/lerna.json ./
COPY --from=builder /usr/src/accounts/node_modules ./node_modules
COPY --from=builder /usr/src/accounts/packages/accounts-errors/dist  /usr/src/accounts/packages/accounts-errors/dist
COPY --from=builder /usr/src/accounts/packages/accounts-errors/package.json  /usr/src/accounts/packages/accounts-errors/
COPY --from=builder /usr/src/accounts/packages/accounts-jwt-verifier/dist  /usr/src/accounts/packages/accounts-jwt-verifier/dist
COPY --from=builder /usr/src/accounts/packages/accounts-jwt-verifier/package.json  /usr/src/accounts/packages/accounts-jwt-verifier/
COPY --from=builder /usr/src/accounts/packages/accounts-protobuf/dist /usr/src/accounts/packages/accounts-protobuf/dist
COPY --from=builder /usr/src/accounts/packages/accounts-protobuf/protobuf /usr/src/accounts/packages/accounts-protobuf/protobuf
COPY --from=builder /usr/src/accounts/packages/accounts-protobuf/package.json /usr/src/accounts/packages/accounts-protobuf/
COPY --from=builder /usr/src/accounts/packages/accounts-utils/dist  /usr/src/accounts/packages/accounts-utils/dist
COPY --from=builder /usr/src/accounts/packages/accounts-utils/package.json  /usr/src/accounts/packages/accounts-utils/
COPY --from=builder /usr/src/accounts/packages/accounts-frontend/.output  /usr/src/accounts/packages/accounts-frontend/.output
COPY --from=builder /usr/src/accounts/packages/accounts-frontend/package.json  /usr/src/accounts/packages/accounts-frontend/

ENV HOST 0.0.0.0
ENV PORT 8000
ENV NODE_ENV production

CMD [ "npm", "start", "-w", "@driten/accounts-frontend"]