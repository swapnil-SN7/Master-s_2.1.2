import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const org = await prisma.item.delete({
    where: {
      id: "ca196ce5-aa8d-4518-a2c9-43e3b2da4a2f",
    },
  });
  return NextResponse.json(org);
}
