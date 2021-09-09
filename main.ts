import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient({
    log: [{ emit: "event", level: "query" }],
  });

  prisma.$on("query", (e) => {
    console.log(e.query, e.params);
  });
  const o1 = await prisma.thing.create({ data: { clientId: 1 } });

  const o2 = await prisma.thing.create({
    data: { clientId: 1, otherUuid: o1.uuid },
  });

  await prisma.thing.update({
    data: { otherUuid: o2.uuid },
    where: { clientId_uuid: { clientId: 1, uuid: o1.uuid } },
  });

  await prisma.thing.update({
    data: {
      otherObject: {
        connect: { clientId_uuid: { clientId: 1, uuid: o2.uuid } },
      },
    },
    where: { clientId_uuid: { clientId: 1, uuid: o1.uuid } },
  });
  console.log(o1);
  prisma.$disconnect();
}

main();
