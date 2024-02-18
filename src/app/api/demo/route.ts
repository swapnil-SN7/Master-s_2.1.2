import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const org = await prisma.item.delete({
    where: {
      id: "88289725-41a8-4503-b614-599724da8724",
    },
  });

  return NextResponse.json(org);
}
