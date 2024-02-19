import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  let item_id = await req.url.slice(req.url.lastIndexOf("/") + 1);
  item_id = decodeURI(item_id);

  console.log(item_id);

  let item;

  try {
    item = await prisma.item.findFirstOrThrow({
      where: {
        id: item_id,
      },
      include: {
        bid: {
          select: {
            id: true,
          },
          orderBy: {
            id: "asc",
          },
        },
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({
        status: "fail",
        msg: err.message,
      });
    }
  }

  if (item) {
    var len = item.bid.length;
    console.log(len);
    var current_price = item.basePrice;

    return NextResponse.json({
      status: "success",
      msg: "Item Data Fetched",
      item,
      current_price: item.currentPrice,
    });
  }
}
