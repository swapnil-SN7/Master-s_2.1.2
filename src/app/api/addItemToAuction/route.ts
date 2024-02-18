import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/*
    This Api will Take Item Details which is to-be added to the Auction 
    along with the auction id (as auc_id) 
    and Return the Status of Item Added

    item Deatils :- 
                    name, desc, tag, basePrice,has3dModel, startTime, endTime (UTC-ISO Time), auc_id 
*/

export async function POST(req: Request) {
  const { auc_id, name, desc, tag, basePrice, has3dModel, startTime, endTime } =
    await req.json();

  if (
    !auc_id ||
    !name ||
    !desc ||
    !tag ||
    !basePrice ||
    !startTime ||
    !endTime
  ) {
    return NextResponse.json({ status: "Fail", msg: "Invalid Params" });
  }

  let auc;

  try {
    auc = await prisma.auction.findFirstOrThrow({
      where: {
        id: auc_id,
      },
      include: {
        listedItems: true,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return NextResponse.json({
          status: "Fail",
          msg: "Auction Does Not Exists",
        });
      }
    }
  }

  let item;

  try {
    item = await prisma.item.create({
      data: {
        name: name,
        description: desc,
        tags: tag,
        basePrice: basePrice,
        auctionId: auc_id,
        startTime: startTime,
        endTime: endTime,
        has3dModel: has3dModel,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientValidationError) {
      return NextResponse.json({ status: "Fail", msg: err.message });
    }
  }

  return NextResponse.json({
    status: "success",
    msg: "Item Added To " + auc?.title,
  });
}
