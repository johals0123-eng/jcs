import { NextResponse } from "next/server";

import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const { id } = await params;

    const enquiry = await prisma.enquiry.findUnique({
      where: { id },
      select: {
        id: true,
        fullName: true,
      },
    });

    if (!enquiry) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry not found.",
        },
        { status: 404 }
      );
    }

    await prisma.enquiry.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully.",
      enquiry: {
        id: enquiry.id,
        fullName: enquiry.fullName,
      },
    });
  } catch (error) {
    console.error("Delete enquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete enquiry.",
      },
      { status: 500 }
    );
  }
}
