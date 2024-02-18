import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/*
   This api will Take Auction Details and Organisation Id and schedule a Aunction Event for the Organisation

   Request :- 
                org_id, auc_title, auc_dec, startTime, endTime (Send UTC DateTime)

*/

export async function POST(req: Request) {
  const { org_id, auc_title, auc_dec, startTime, endTime } = await req.json();

  if (!org_id || !auc_dec || !auc_title || !startTime || !endTime) {
    return NextResponse.json({ status: "Fail", msg: "Invalid Params" });
  }

  let org;

  try {
    org = await prisma.organiser.findFirstOrThrow({
      where: {
        id: org_id,
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

  let auc;

  try {
    auc = await prisma.auction.create({
      data: {
        title: auc_title,
        description: auc_dec,
        startTime: startTime,
        endTime: endTime,
        organiserId: org_id,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientValidationError) {
      return NextResponse.json({ status: "Fail", msg: err.message });
    }
  }

  return NextResponse.json({ status: "success", auction_data: auc });
}
