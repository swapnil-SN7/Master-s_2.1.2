import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name, pass } = await req.json();

  let org;

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

  return NextResponse.json({
    status: "success",
    msg: "Organisation Registered",
    org,
  });
}
