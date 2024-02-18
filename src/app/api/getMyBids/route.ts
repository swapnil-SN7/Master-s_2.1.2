import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/*
    Pass me The user id in Post Req as (uid)
    Get a list of users bids for The DB  
*/

export async function POST(req: Request) {
  const { uid } = await req.json();

  let bids;

  try {
    bids = await prisma.bidder.findFirstOrThrow({
      where: {
        id: uid,
      },
      select: {
        name: true,
        bids: true,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return NextResponse.json({
          status: "Fail",
          msg: "User Does Not Exists",
        });
      }
    }
  }

  if (bids) {
    return NextResponse.json({
      status: "success",
      msg: bids.bids.length + " Bids Found",
      bids,
    });
  } else {
    return NextResponse.json({
      status: "success",
      msg: "No Bids Found",
    });
  }
}
