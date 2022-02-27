import * as prisma from "@prisma/client";

export const client = new prisma.PrismaClient();

export { prisma };
