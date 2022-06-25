import * as prisma from "@prisma/client";

export const client = new prisma.PrismaClient();

client.$use(async (params, next) => {
  // Check incoming query type
  if (["findMany", "findUnique", "findFirst"].includes(params.action)) {
    if (params.args.where) {
      params.args.where["deletedAt"] = null;
    } else {
      params.args["where"] = { deletedAt: null };
    }
  }

  return next(params);
});

client.$use(async (params, next) => {
  // Check incoming query type
  if (params.action == "delete") {
    // Delete queries
    // Change action to an update
    params.action = "update";
    params.args["data"] = { deletedAt: new Date() };
  }

  if (params.action == "deleteMany") {
    // Delete many queries
    params.action = "updateMany";
    if (params.args.data != undefined) {
      params.args.data["deletedAt"] = new Date();
    } else {
      params.args["data"] = { deletedAt: new Date() };
    }
  }

  return next(params);
});

export { prisma };
