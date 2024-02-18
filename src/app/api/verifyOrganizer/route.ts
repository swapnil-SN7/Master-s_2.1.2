import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/*
   This Api is Used to Verify the Organiser from our side To maintain Authenticity
  
   Pass The Oraginser uuid (as orgId) in POST Req
   Get Status in return 

*/

export async function POST(req: Request) {
  const { orgId } = await req.json();

  if (!orgId) {
    return NextResponse.json({ status: "Fail", msg: "Invalid Params" });
  }

  let org;

  try {
    org = await prisma.organiser.findFirstOrThrow({
      where: {
        id: orgId,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return NextResponse.json({
          status: "Fail",
          msg: "Organiser Does Not Exists",
        });
      }
    }
  }

  let upt;
  try {
    upt = await prisma.organiser.update({
      where: {
        id: orgId,
      },
      data: {
        isVerified: true,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientUnknownRequestError) {
      return NextResponse.json({ status: "Fail", mag: e.message });
    }
  }

  return NextResponse.json({
    status: "success",
    msg: upt?.name + " is Now Verified",
  });
}
