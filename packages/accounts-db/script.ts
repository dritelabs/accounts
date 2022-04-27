import * as prisma from "@prisma/client";

export const client = new prisma.PrismaClient();

async function main() {
  const developersHost = "http://localhost:3001";
  const sitesHost = "http://localhost:3002";

  await client.user.create({
    data: {
      email: "guillermolopez2529@gmail.com",
      password: "$2b$10$Esv68PSjvpEPwevoUw8kCuAaD/YTphfQI7v0nauzqqIryvnOxtJLi",
    },
  });

  await client.scope.createMany({
    data: [
      {
        display_name: "View profile information",
        name: "profile",
        description: "Create update profile information",
      },
      {
        display_name: "Create, update and view clients",
        name: "clients",
        description: "Create, read, update or delete clients",
      },
      {
        display_name: "Create and update clients",
        name: "clients:write",
        description: "Create, update or delete clients",
      },
      {
        display_name: "View clients",
        name: "clients:read",
        description: "Read clients",
      },
      {
        display_name: "Create and update cms information",
        name: "cms:write",
        description: "Create, update or delete sites",
      },
      {
        display_name: "View cms information",
        name: "cms:read",
        description: "Read sites",
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
      client_uri: `${developersHost}`,
      contacts: [],
      description: "Driten application to create clients.",
      grant_types: [
        "authorization_code",
        "client_credentials",
        "refresh_token",
      ],
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
      jwks_uri: `${developersHost}/api/jwks`,
      logo_uri: `${developersHost}/logo.png`,
      name: "Driten Developers",
      policy_uri: `${developersHost}/policy`,
      redirect_uris: [`${developersHost}/callback`],
      response_types: ["code"],
      scope: {
        connect: [{ name: "clients:write" }, { name: "clients:read" }],
      },
      secret: "cl05amov600137o9kit49f4czcl05amov600137o9kit49f4cz",
      software_id: "developers",
      software_version: "0.0.0",
      token_endpoint_auth_method: "private_key_jwt",
      tos_uri: `${developersHost}/tos`,
      is_first_party: true,
    },
  });

  await client.client.create({
    data: {
      user: {
        connect: {
          email: "guillermolopez2529@gmail.com",
        },
      },
      id: "cl05amov600137o9kit49f4cf",
      application_type: "web",
      client_uri: `${sitesHost}`,
      contacts: [],
      description: "Driten application to create sites.",
      grant_types: [
        "authorization_code",
        "client_credentials",
        "refresh_token",
      ],
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
      jwks_uri: `${sitesHost}/api/jwks`,
      logo_uri: `${sitesHost}/logo.png`,
      name: "Driten Sites",
      policy_uri: `${sitesHost}/policy`,
      redirect_uris: [`${sitesHost}/callback`],
      response_types: ["code"],
      scope: {
        connect: [{ name: "sites:write" }, { name: "sites:read" }],
      },
      secret: "cl05amov600137o9kit49f4czcl05amov600137o9kit49f4cz",
      software_id: "sites",
      software_version: "0.0.0",
      token_endpoint_auth_method: "private_key_jwt",
      tos_uri: `${sitesHost}/tos`,
      is_first_party: true,
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
