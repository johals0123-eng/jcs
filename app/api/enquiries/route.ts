import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      service,
      location,
      craneType,
      requirement,
      timeline,
      company,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !phone ||
      !service ||
      !location ||
      !requirement
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Save enquiry to database
    const enquiry = await prisma.enquiry.create({
      data: {
        fullName: String(fullName).trim(),
        phone: String(phone).trim(),
        email: email ? String(email).trim() : null,
        service: String(service).trim(),
        location: String(location).trim(),
        craneType: craneType ? String(craneType).trim() : null,
        requirement: String(requirement).trim(),
        timeline: timeline ? String(timeline).trim() : null,
        company: company ? String(company).trim() : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully.",
        enquiryId: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}