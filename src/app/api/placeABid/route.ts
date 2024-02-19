import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { bidder_id, price } = await req.json();
  return NextResponse.json({});
}
