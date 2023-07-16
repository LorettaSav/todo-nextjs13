import { PrismaClient } from "@prisma/client";

/*
this is a separate file because what nextjs does in 
development mode is to perform hot-reloading: sends down
only the files that are going to be changed + reruns things
w/o restarting the server BUT has some issues with prisma
cz it tries to constantly create new connections to your
prismaclient. -- documentation on prisma there's article
with the below solution for this issue.

*/

//taking global object and adding the prismaclient to this
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

//Creating a var called prisma and we either set it to that global variable
//that we created or
// it creates a brandnew prismaclient
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

//if we are not in production get prisma from that
//global variable
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

//basically means that whatever the number of times we access the prisma variable
// it will only create one prismaclient -- so prevents tons of clients spawning
// with nextjs hot-reloading
