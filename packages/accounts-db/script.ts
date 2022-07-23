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
        displayName: "OpenID",
        name: "openid",
        description: "openid description",
      },
      {
        displayName: "View profile information",
        name: "profile",
        description: "Create update profile information",
      },
      {
        displayName: "email",
        name: "email",
        description: "email description",
      },
      {
        displayName: "address",
        name: "address",
        description: "address description",
      },
      {
        displayName: "phone",
        name: "phone",
        description: "phone description",
      },
      {
        displayName: "Create, update and view clients",
        name: "clients",
        description: "Create, read, update or delete clients",
      },
      {
        displayName: "Create and update clients",
        name: "clients:write",
        description: "Create, update or delete clients",
      },
      {
        displayName: "View clients",
        name: "clients:read",
        description: "Read clients",
      },
      {
        displayName: "Create and update cms information",
        name: "cms:write",
        description: "Create, update or delete sites",
      },
      {
        displayName: "View cms information",
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
      type: "web",
      uri: `${developersHost}`,
      contacts: [],
      description: "Driten application to create clients.",
      grantTypes: ["authorization_code", "client_credentials", "refresh_token"],
      jwksUri: `${developersHost}/api/jwks`,
      logoUri: `${developersHost}/logo.png`,
      name: "Driten Developers",
      policyUri: `${developersHost}/policy`,
      redirectUris: [`${developersHost}/callback`],
      responseTypes: ["code"],
      scope: {
        connect: [{ name: "clients:write" }, { name: "clients:read" }],
      },
      secret: "cl05amov600137o9kit49f4czcl05amov600137o9kit49f4cz",
      softwareId: "developers",
      softwareVersion: "0.0.0",
      tokenEndpointAuthMethod: "private_key_jwt",
      tosUri: `${developersHost}/tos`,
      isFirstParty: true,
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
      type: "web",
      uri: `${sitesHost}`,
      contacts: [],
      description: "Driten application to create sites.",
      grantTypes: ["authorization_code", "client_credentials", "refresh_token"],
      jwksUri: `${sitesHost}/api/jwks`,
      logoUri: `${sitesHost}/logo.png`,
      name: "Driten Sites",
      policyUri: `${sitesHost}/policy`,
      redirectUris: [`${sitesHost}/callback`],
      responseTypes: ["code"],
      scope: {
        connect: [{ name: "sites:write" }, { name: "sites:read" }],
      },
      secret: "cl05amov600137o9kit49f4czcl05amov600137o9kit49f4cz",
      softwareId: "sites",
      softwareVersion: "0.0.0",
      tokenEndpointAuthMethod: "private_key_jwt",
      tosUri: `${sitesHost}/tos`,
      isFirstParty: true,
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
