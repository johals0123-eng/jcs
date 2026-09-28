import { NextResponse } from "next/server";

import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const ALLOWED_STATUSES = [
  "NEW",
  "CONTACTED",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check admin authentication
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

    // Get enquiry ID
    const { id } = await params;

    // Read request body
    const body = await request.json();

    const status = body.status;

    // Validate status
    if (
      typeof status !== "string" ||
      !ALLOWED_STATUSES.includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid status.",
        },
        { status: 400 }
      );
    }

    // Check whether enquiry exists
    const existingEnquiry =
      await prisma.enquiry.findUnique({
        where: {
          id,
        },
      });

    if (!existingEnquiry) {
      return NextResponse.json(
        {
          success: false,
          message: "Enquiry not found.",
        },
        { status: 404 }
      );
    }

    // Update status
    const enquiry = await prisma.enquiry.update({
      where: {
        id,
      },
      data: {
        status,
      },
      select: {
        id: true,
        status: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry status updated successfully.",
      enquiry,
    });
  } catch (error) {
    console.error(
      "Update enquiry status error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update enquiry status.",
      },
      { status: 500 }
    );
  }
}