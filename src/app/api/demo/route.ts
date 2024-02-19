import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const org = await prisma.bidder.findMany({});
  return NextResponse.json(org);
}
