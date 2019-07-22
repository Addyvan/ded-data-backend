import { prisma } from "../src/generated/reporting/prisma-client/index";

async function test() {
  console.log(await prisma.gcAccountDatas());
}

test();