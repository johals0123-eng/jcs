import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import AdminDashboard from "./admin-dashboard";

export default async function AdminPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const admin = await prisma.admin.findUnique({
    where: {
      id: session.adminId,
    },
    select: {
      name: true,
      email: true,
    },
  });

  if (!admin) {
    redirect("/admin/login");
  }

  const [
    total,
    newCount,
    contactedCount,
    inProgressCount,
    completedCount,
    cancelledCount,
    recentEnquiries,
  ] = await Promise.all([
    prisma.enquiry.count(),

    prisma.enquiry.count({
      where: {
        status: "NEW",
      },
    }),

    prisma.enquiry.count({
      where: {
        status: "CONTACTED",
      },
    }),

    prisma.enquiry.count({
      where: {
        status: "IN_PROGRESS",
      },
    }),

    prisma.enquiry.count({
      where: {
        status: "COMPLETED",
      },
    }),

    prisma.enquiry.count({
      where: {
        status: "CANCELLED",
      },
    }),

    prisma.enquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
      

      select: {
        id: true,
        fullName: true,
        phone: true,
        email: true,
        service: true,
        location: true,
        craneType: true,
        requirement: true,
        timeline: true,
        company: true,
        status: true,
        adminNotes: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
  ]);

  return (
    <AdminDashboard
      admin={admin}
      statistics={{
        total,
        newCount,
        contactedCount,
        inProgressCount,
        completedCount,
        cancelledCount,
      }}
      recentEnquiries={recentEnquiries}
    />
  );
}