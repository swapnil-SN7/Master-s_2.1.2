import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

/*
    This Api will Take Item id In Respnse and Delete that item form the Auction
*/

export async function POST(req: Request) {
  const { itemId } = await req.json();

  if (!itemId) {
    return NextResponse.json({ status: "fail", msg: "Invlaid Params" });
  }

  let itm;
  try {
    itm = await prisma.item.delete({
      where: {
        id: itemId,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        return NextResponse.json({
          status: "Fail",
          msg: "Item Does Not Exists",
        });
      }
    }
  }
  return NextResponse.json({
    status: "success",
    msg: "Item Deleted Successfully",
  });
}
