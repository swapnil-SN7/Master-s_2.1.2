import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, pass } = await req.json();

  let org;

  try {
    org = await prisma.organiser.findFirstOrThrow({
      where: {
        email: email,
      },
      select: {
        id: true,
        isVerified: true,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({ status: "success", msg: err.message });
    }
  }

  return NextResponse.json({
    status: "success",
    msg: "Organisation Logged In",
    org,
  });
}
