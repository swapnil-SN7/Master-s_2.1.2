import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  let bidder;

  try {
    bidder = await prisma.bidder.findFirstOrThrow({
      where: {
        email: email,
      },
      select: {
        id: true,
        isVerified: true,
        name: true,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({ status: "success", msg: err.message });
    }
  }

  return NextResponse.json({
    status: "success",
    msg: "Fetched Data",
    bidder,
  });
}
