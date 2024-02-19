import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name, pass } = await req.json();

  let org;

  try {
    org = await prisma.organiser.create({
      data: {
        name: name,
        email: email,
        password: pass,
      },
      select: {
        id: true,
        isVerified: true,
      },
    });
  } catch (arr) {
    if (arr instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({
        status: "Fail",
        msg: arr.message,
      });
    }
  }

  return NextResponse.json({
    status: "success",
    msg: "Organisation Registered",
    org,
  });
}
