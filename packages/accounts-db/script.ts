import * as prisma from "@prisma/client";

export const client = new prisma.PrismaClient();

async function main() {
  const host = "http://localhost:3001";

  await client.user.create({
    data: {
      email: "guillermolopez2529@gmail.com",
      password: "$2b$10$Esv68PSjvpEPwevoUw8kCuAaD/YTphfQI7v0nauzqqIryvnOxtJLi",
    },
  });

  await client.scope.createMany({
    data: [
      {
        display_name: "Profile",
        name: "profile",
        description: "Create or update profile information",
      },
      {
        display_name: "Write clients",
        name: "clients:write",
        description: "Create, update or delete clients",
      },
      {
        display_name: "Read clients",
        name: "clients:read",
        description: "Read clients",
      },
    ],
  });

  await client.client.create({
    data: {
      user: {
        connect: {
          email: "guillermolopez2529@gmail.com",
        },
      },
      id: "cl05amov600137o9kit49f4cz",
      application_type: "web",
      client_uri: `${host}`,
      contacts: [],
      description: "Developers application",
      grant_types: ["authorization_code", "refresh_token"],
      jwks: {
        keys: [
          {
            kty: "RSA",
            e: "AQAB",
            use: "sig",
            alg: "RS256",
            n: "goCfUUNl5jNUA_XMbtw3JXKYxeumDHQjWgHhCG_Qcj3N9w8aEE9OBVL-wSc-eYhW1u3q1eBEvt2TySmHW6fndP_G7FN-QkzINIvVN5wQVrX6P2V-y71GcazLXVgNw73IPo_1tvnivHpd3vSHC09ih_9vXFou8rVOS1mnWeR8rR7Mxjs0zf74E15H7_dh-NEQVsqDGMqsnB-E0Ki_JCBLgvAIlc0WCGmOIk0ithUnH-wQamWXqobHa8KJNJ4_esoZVoegbgZgRV1sb8x4jG1fKxAeNW0a-9B0GV7mSFGPSCTQ8jYaCalnWqdeEvFg7QrfQxReKWVyf42hk1CibS4vbw",
          },
        ],
      },
      jwks_uri: `${host}/jwks.json`,
      logo_uri: `${host}/logo.png`,
      name: "Developers",
      policy_uri: `${host}/policy`,
      redirect_uris: [`${host}/callback`],
      response_types: ["code"],
      scope: {
        connect: [{ name: "clients:write" }, { name: "clients:read" }],
      },
      secret: "cl05amov600137o9kit49f4czcl05amov600137o9kit49f4cz",
      software_id: "developers",
      software_version: "0.0.0",
      token_endpoint_auth_method: "private_key_jwt",
      tos_uri: `${host}/tos`,
    },
  });
}

main()
  .then(() => {
    console.log("done");
  })
  .catch((e) => {
    console.log(e);
    throw e;
  })
  .finally(async () => {
    await client.$disconnect();
  });
