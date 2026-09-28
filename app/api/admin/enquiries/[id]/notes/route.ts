import { NextResponse } from "next/server";

import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
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

    const body = await request.json();

    const adminNotes = body.adminNotes;

    if (
      adminNotes !== null &&
      typeof adminNotes !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid admin notes.",
        },
        { status: 400 }
      );
    }

    const enquiry = await prisma.enquiry.findUnique({
      where: {
        id,
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

    const updatedEnquiry =
      await prisma.enquiry.update({
        where: {
          id,
        },
        data: {
          adminNotes:
            adminNotes?.trim() || null,
        },
        select: {
          id: true,
          adminNotes: true,
          updatedAt: true,
        },
      });

    return NextResponse.json({
      success: true,
      message: "Admin notes saved successfully.",
      enquiry: updatedEnquiry,
    });
  } catch (error) {
    console.error("Update admin notes error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save admin notes.",
      },
      { status: 500 }
    );
  }
}