"use client";

import {
  CheckCircle2,
  Clock3,
  ChevronDown,
  Download,
  FileText,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Search,
  User,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useMemo,
  useState,
} from "react";


interface AdminDashboardProps {
  admin: {
    name: string | null;
    email: string;
  };

  statistics: {
    total: number;
    newCount: number;
    contactedCount: number;
    inProgressCount: number;
    completedCount: number;
    cancelledCount: number;
  };

  recentEnquiries: {
    id: string;
    fullName: string;
    phone: string;
    email: string | null;
    service: string;
    location: string;
    craneType: string | null;
    requirement: string;
    timeline: string | null;
    company: string | null;
    status: string;
    adminNotes: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

const STATUS_OPTIONS = [
  { value: "ALL", label: "All Statuses" },
  { value: "NEW", label: "New" },
  { value: "CONTACTED", label: "Contacted" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "COMPLETED", label: "Completed" },
  { value: "CANCELLED", label: "Cancelled" },
];

export default function AdminDashboard({
  admin,
  statistics,
  recentEnquiries,
}: AdminDashboardProps) {
  const router = useRouter();

  const [loggingOut, setLoggingOut] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [exportMenuOpen, setExportMenuOpen] =
  useState(false);
  const [currentPage, setCurrentPage] =
  useState(1);

  const ENQUIRIES_PER_PAGE = 10;

  const [selectedEnquiry, setSelectedEnquiry] =
    useState<AdminDashboardProps["recentEnquiries"][number] | null>(
      null
    );

  async function handleLogout() {
    setLoggingOut(true);

    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      setLoggingOut(false);
    }
  }

  const cards = [
    {
      title: "Total Enquiries",
      value: statistics.total,
      icon: FileText,
    },
    {
      title: "New",
      value: statistics.newCount,
      icon: Clock3,
    },
    {
      title: "Contacted",
      value: statistics.contactedCount,
      icon: PhoneCall,
    },
    {
      title: "In Progress",
      value: statistics.inProgressCount,
      icon: Loader2,
    },
    {
      title: "Completed",
      value: statistics.completedCount,
      icon: CheckCircle2,
    },
    {
      title: "Cancelled",
      value: statistics.cancelledCount,
      icon: X,
    },
  ];

  const filteredEnquiries = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return recentEnquiries.filter((enquiry) => {
      const matchesSearch =
        searchText === "" ||
        enquiry.fullName.toLowerCase().includes(searchText) ||
        enquiry.service.toLowerCase().includes(searchText) ||
        enquiry.location.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "ALL" ||
        enquiry.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [recentEnquiries, search, statusFilter]);

  const totalPages = Math.max(
  1,
  Math.ceil(
    filteredEnquiries.length /
      ENQUIRIES_PER_PAGE
  )
);

const paginatedEnquiries = useMemo(() => {
  const startIndex =
    (currentPage - 1) * ENQUIRIES_PER_PAGE;

  const endIndex =
    startIndex + ENQUIRIES_PER_PAGE;

  return filteredEnquiries.slice(
    startIndex,
    endIndex
  );
}, [filteredEnquiries, currentPage]);


const startItem =
  filteredEnquiries.length === 0
    ? 0
    : (currentPage - 1) * ENQUIRIES_PER_PAGE + 1;

const endItem = Math.min(
  currentPage * ENQUIRIES_PER_PAGE,
  filteredEnquiries.length
);

  function downloadCSV(
  enquiries: AdminDashboardProps["recentEnquiries"]
) {
  if (enquiries.length === 0) {
    return;
  }

  const headers = [
    "Customer Name",
    "Phone",
    "Email",
    "Company",
    "Service",
    "Location",
    "Crane Type",
    "Requirement",
    "Timeline",
    "Status",
    "Admin Notes",
    "Submitted",
    "Last Updated",
  ];

  const escapeCSV = (value: string | null) => {
    if (value === null) {
      return "";
    }

    return `"${value.replace(/"/g, '""')}"`;
  };

  const rows = enquiries.map((enquiry) => [
    escapeCSV(enquiry.fullName),
    escapeCSV(enquiry.phone),
    escapeCSV(enquiry.email),
    escapeCSV(enquiry.company),
    escapeCSV(enquiry.service),
    escapeCSV(enquiry.location),
    escapeCSV(enquiry.craneType),
    escapeCSV(enquiry.requirement),
    escapeCSV(enquiry.timeline),
    escapeCSV(enquiry.status),
    escapeCSV(enquiry.adminNotes),
    escapeCSV(formatDateTime(enquiry.createdAt)),
    escapeCSV(formatDateTime(enquiry.updatedAt)),
  ]);

  const csvContent = [
    headers.map(escapeCSV).join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\r\n");

  const blob = new Blob(
    ["\uFEFF" + csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `johal-crane-enquiries-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
async function handleExportAll() {
  try {
    const response = await fetch(
      "/api/admin/enquiries/export"
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to export enquiries."
      );
    }

    const enquiries =
      data.enquiries.map(
        (enquiry: AdminDashboardProps["recentEnquiries"][number]) => ({
          ...enquiry,
          createdAt: new Date(enquiry.createdAt),
          updatedAt: new Date(enquiry.updatedAt),
        })
      );

    downloadCSV(enquiries);
  } catch (error) {
    console.error(
      "Export all enquiries error:",
      error
    );

    alert(
      error instanceof Error
        ? error.message
        : "Unable to export enquiries."
    );
  } finally {
    setExportMenuOpen(false);
  }
}

useEffect(() => {
  setCurrentPage(1);
}, [search, statusFilter]);


useEffect(() => {
  if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }
}, [currentPage, totalPages]);



function handleExportFiltered() {
  downloadCSV(filteredEnquiries);
  setExportMenuOpen(false);
}

  function clearFilters() {
    setSearch("");
    setStatusFilter("ALL");
  }

  const hasFilters =
    search.trim() !== "" || statusFilter !== "ALL";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium text-yellow-400">
              JOHAL CRANE SERVICES
            </p>

            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-white">
                {admin.name || "Administrator"}
              </p>

              <p className="text-xs text-slate-400">
                {admin.email}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center gap-2 rounded-lg border border-red-800 bg-red-950/40 px-4 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-900/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loggingOut ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                  Logging out...
                </>
              ) : (
                <>
                  <LogOut size={17} />
                  Logout
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* WELCOME */}
        <div className="mb-8">
          <p className="text-sm text-slate-400">
            Welcome back, {admin.name || "Administrator"}.
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            Enquiry Overview
          </h2>
        </div>

        {/* STATISTICS */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">
                      {card.title}
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                      {card.value}
                    </p>
                  </div>

                  <div className="rounded-lg bg-yellow-400/10 p-2.5 text-yellow-400">
                    <Icon size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ENQUIRIES */}
        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              Enquiry Management
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Search and filter customer enquiries.
            </p>
          </div>

          {/* SEARCH + FILTER */}
          <div className="mb-5 rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              {/* SEARCH */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search by customer, service or location..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-400"
                />
              </div>

              {/* STATUS */}
              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value)
                }
                className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-yellow-400"
              >
                {STATUS_OPTIONS.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              {/* CLEAR */}
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
                >
                  <X size={16} />
                  Clear
                </button>
              )}

              {/* EXPORT */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setExportMenuOpen((open) => !open)
                  }
                  aria-expanded={exportMenuOpen}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/20 lg:w-auto"
                >
                  <Download size={16} />
                  Export

                  <ChevronDown
                    size={16}
                    className={
                      exportMenuOpen
                        ? "rotate-180 transition"
                        : "transition"
                    }
                  />
                </button>

                {exportMenuOpen && (
                  <div className="absolute right-0 z-30 mt-2 w-56 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl">
                    <button
                      type="button"
                      onClick={handleExportAll}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-slate-800"
                    >
                      <Download size={16} />
                      <span>
                        <span className="block font-medium">
                          Export All
                        </span>
                        <span className="block text-xs text-slate-500">
                          Export all loaded enquiries
                        </span>
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleExportFiltered}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-slate-800"
                    >
                      <FileText size={16} />
                      <span>
                        <span className="block font-medium">
                          Export Filtered Results
                        </span>
                        <span className="block text-xs text-slate-500">
                          Export current search/filter results
                        </span>
                      </span>
                    </button>
                  </div>
                )}
              </div>




            </div>

            <div className="mt-3 text-xs text-slate-500">
              {filteredEnquiries.length === 0
                ? "No enquiries to display"
                : `Showing ${startItem}-${endItem} of ${filteredEnquiries.length} enquiries`}
            </div>
          </div>

          {/* TABLE */}
          {filteredEnquiries.length === 0 ? (
  <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-slate-500">
      <FileText size={24} />
    </div>

    {recentEnquiries.length === 0 ? (
      <>
        <p className="mt-4 font-semibold text-slate-200">
          No enquiries yet
        </p>

        <p className="mt-2 text-sm text-slate-400">
          Customer enquiries submitted through the
          website will appear here.
        </p>
      </>
    ) : (
      <>
        <p className="mt-4 font-semibold text-slate-200">
          No matching enquiries
        </p>

        <p className="mt-2 text-sm text-slate-400">
          No enquiries match your current search or
          status filter.
        </p>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            Clear Search & Filters
          </button>
        )}
      </>
    )}
  </div>
) : (
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="border-b border-slate-800 bg-slate-950">
                    <tr>
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Customer
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Service
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Location
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Status
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Date
                      </th>

                      <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-800">
                    {paginatedEnquiries.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        className="transition hover:bg-slate-800/40"
                      >
                        <td className="px-5 py-4">
                          <p className="font-medium">
                            {enquiry.fullName}
                          </p>
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-300">
                          {enquiry.service}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-300">
                          {enquiry.location}
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge
                            status={enquiry.status}
                          />
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-400">
                          {formatDate(enquiry.createdAt)}
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedEnquiry(enquiry)
                            }
                            className="rounded-lg bg-yellow-400 px-3 py-2 text-xs font-bold text-slate-950 transition hover:bg-yellow-300"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                {totalPages > 1 && (
                <div className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-400">
                    Page {currentPage} of {totalPages}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage((page) =>
                          Math.max(1, page - 1)
                        )
                      }
                      disabled={currentPage === 1}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Previous
                    </button>

                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1
                    ).map((page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                          currentPage === page
                            ? "bg-yellow-400 text-slate-950"
                            : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage((page) =>
                          Math.min(totalPages, page + 1)
                        )
                      }
                      disabled={currentPage === totalPages}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      
      {/* DETAILS MODAL */}
        {selectedEnquiry && (
          <EnquiryDetailsModal
            enquiry={selectedEnquiry}
            onClose={() => setSelectedEnquiry(null)}
            onNotesSaved={(adminNotes) => {
              setSelectedEnquiry((current) =>
                current
                  ? {
                      ...current,
                      adminNotes,
                    }
                  : current
              );
            }}
            onDelete={(enquiryId) => {
            setSelectedEnquiry(null);

            // Remove the deleted enquiry from the dashboard list
            window.location.reload();
          }}
          />
        )}
    </main>
  );
}

function EnquiryDetailsModal({
  enquiry,
  onClose,
  onNotesSaved,
  onDelete,
}: {
  enquiry: AdminDashboardProps["recentEnquiries"][number];
  onClose: () => void;
  onNotesSaved: (adminNotes: string | null) => void;
  onDelete: (enquiryId: string) => void;
}) {
    const [status, setStatus] = useState(enquiry.status);
    const [updatingStatus, setUpdatingStatus] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusError, setStatusError] = useState("");

    const [adminNotes, setAdminNotes] = useState(
      enquiry.adminNotes || ""
    );

    const [savingNotes, setSavingNotes] = useState(false);
    const [notesMessage, setNotesMessage] = useState("");
    const [notesError, setNotesError] = useState("");
    const [deletingEnquiry, setDeletingEnquiry] = useState(false);
    const [deleteError, setDeleteError] = useState("");


      async function handleStatusUpdate() {
    if (status === enquiry.status) {
      return;
    }

    setUpdatingStatus(true);
    setStatusMessage("");
    setStatusError("");

    try {
      const response = await fetch(
        `/api/admin/enquiries/${enquiry.id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to update status."
        );
      }

      setStatusMessage(
        "Enquiry status updated successfully."
      );
    } catch (error) {
      console.error("Status update error:", error);

      setStatusError(
        error instanceof Error
          ? error.message
          : "Unable to update status."
      );

      setStatus(enquiry.status);
    } finally {
      setUpdatingStatus(false);
    }
  }

  async function handleSaveNotes() {
  setSavingNotes(true);
  setNotesMessage("");
  setNotesError("");

  try {
    const response = await fetch(
      `/api/admin/enquiries/${enquiry.id}/notes`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminNotes,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to save notes."
      );
    }

    setNotesMessage(
      "Admin notes saved successfully."
    );

    onNotesSaved(adminNotes.trim() || null);

    } catch (error) {
      console.error("Save notes error:", error);

      setNotesError(
        error instanceof Error
          ? error.message
          : "Unable to save notes."
      );
    } finally {
      setSavingNotes(false);
    }
  }


async function handleDeleteEnquiry() {
  const confirmed = window.confirm(
    `Are you sure you want to delete the enquiry from ${enquiry.fullName}? This action cannot be undone.`
  );

  if (!confirmed) {
    return;
  }

  setDeletingEnquiry(true);
  setDeleteError("");

  try {
    const response = await fetch(
      `/api/admin/enquiries/${enquiry.id}/delete`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to delete enquiry."
      );
    }

    onDelete(enquiry.id);
    onClose();
  } catch (error) {
    console.error("Delete enquiry error:", error);

    setDeleteError(
      error instanceof Error
        ? error.message
        : "Unable to delete enquiry."
    );
  } finally {
    setDeletingEnquiry(false);
  }
}


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        
        {/* MODAL HEADER */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
              Customer Enquiry
            </p>

            <h2 className="mt-1 text-xl font-bold">
              {enquiry.fullName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            aria-label="Close enquiry details"
          >
            <X size={22} />
          </button>
        </div>

        {/* MODAL CONTENT */}
        <div className="space-y-6 p-5 sm:p-6">
          {/* CONTACT INFORMATION */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Contact Information
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              <DetailItem
                icon={User}
                label="Full Name"
                value={enquiry.fullName}
              />

              <DetailItem
                icon={Phone}
                label="Phone"
                value={enquiry.phone}
              />

              <DetailItem
                icon={Mail}
                label="Email"
                value={enquiry.email || "Not provided"}
              />

              <DetailItem
                icon={MapPin}
                label="Location"
                value={enquiry.location}
              />

              <DetailItem
                icon={MessageCircle}
                label="Company"
                value={enquiry.company || "Not provided"}
              />
            </div>
          </section>

          {/* SERVICE INFORMATION */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Service Information
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              <DetailItem
                icon={FileText}
                label="Service"
                value={enquiry.service}
              />

              <DetailItem
                icon={FileText}
                label="Crane Type"
                value={
                  enquiry.craneType || "Not specified"
                }
              />

              <DetailItem
                icon={Clock3}
                label="Timeline"
                value={
                  enquiry.timeline || "Not specified"
                }
              />

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Status
                </p>

                <div className="mt-2">
                  <StatusBadge status={status} />
                </div>

                <select
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value);
                    setStatusMessage("");
                    setStatusError("");
                  }}
                  className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400"
                >
                  <option value="NEW">New</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="IN_PROGRESS">
                    In Progress
                  </option>
                  <option value="COMPLETED">Completed</option>
                  <option value="CANCELLED">Cancelled</option>
                </select>

                {status !== enquiry.status && (
                  <button
                    type="button"
                    onClick={handleStatusUpdate}
                    disabled={updatingStatus}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {updatingStatus ? (
                      <>
                        <Loader2
                          size={16}
                          className="animate-spin"
                        />
                        Updating...
                      </>
                    ) : (
                      "Update Status"
                    )}
                  </button>
                )}

                {statusMessage && (
                  <p className="mt-2 text-xs font-medium text-green-400">
                    {statusMessage}
                  </p>
                )}

                {statusError && (
                  <p className="mt-2 text-xs font-medium text-red-400">
                    {statusError}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* REQUIREMENT */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Customer Requirement
            </h3>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="whitespace-pre-wrap text-sm leading-6 text-slate-300">
                {enquiry.requirement}
              </p>
            </div>
          </section>


          {/* INTERNAL ADMIN NOTES */}
          <section>
            <div className="mb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Internal Admin Notes
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                These notes are private and are not visible to customers.
              </p>
            </div>

            <textarea
              value={adminNotes}
              onChange={(event) => {
                setAdminNotes(event.target.value);
                setNotesMessage("");
                setNotesError("");
              }}
              rows={5}
              placeholder="Add internal notes about this enquiry..."
              className="w-full resize-y rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-yellow-400"
            />

            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                {notesMessage && (
                  <p className="text-xs font-medium text-green-400">
                    {notesMessage}
                  </p>
                )}

                {notesError && (
                  <p className="text-xs font-medium text-red-400">
                    {notesError}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSaveNotes}
                disabled={savingNotes}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {savingNotes ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    Saving...
                  </>
                ) : (
                  "Save Notes"
                )}
              </button>
            </div>
          </section>

          {/* DATE INFORMATION */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Enquiry Information
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              <DetailItem
                icon={Clock3}
                label="Submitted"
                value={formatDateTime(
                  enquiry.createdAt
                )}
              />

              <DetailItem
                icon={Clock3}
                label="Last Updated"
                value={formatDateTime(
                  enquiry.updatedAt
                )}
              />
            </div>
          </section>

          {/* CLOSE
          <div className="flex justify-end border-t border-slate-800 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Close
            </button>
          </div> */}

          {/* ACTIONS */}
          <div className="border-t border-slate-800 pt-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row">
                  {/* CALL */}
                  <a
                    href={`tel:${enquiry.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-500"
                  >
                    <PhoneCall size={17} />
                    Call Customer
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={`https://wa.me/${formatWhatsAppNumber(
                      enquiry.phone
                    )}?text=${encodeURIComponent(
                      `Hello ${enquiry.fullName}, This is Johal Crane Services regarding your enquiry. We would like to discuss your requirement with you.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-400"
                  >
                    <MessageCircle size={17} />
                    WhatsApp
                  </a>
                </div>

                {/* CLOSE */}
                <button
                  type="button"
                  onClick={onClose}
                  disabled={deletingEnquiry}
                  className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Close
                </button>
              </div>

              {/* DELETE */}
              <div className="border-t border-slate-800 pt-4">
                {deleteError && (
                  <p className="mb-3 text-xs font-medium text-red-400">
                    {deleteError}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleDeleteEnquiry}
                  disabled={deletingEnquiry}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-5 py-2.5 text-sm font-bold text-red-400 transition hover:bg-red-500/20 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {deletingEnquiry ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                      Deleting Enquiry...
                    </>
                  ) : (
                    "Delete Enquiry"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `91${digits}`;
  }

  if (digits.startsWith("91") && digits.length === 12) {
    return digits;
  }

  return digits;
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-yellow-400/10 p-2 text-yellow-400">
          <Icon size={17} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {label}
          </p>

          <p className="mt-1 break-words text-sm text-slate-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    NEW: "bg-yellow-400/10 text-yellow-300 border-yellow-500/20",
    CONTACTED:
      "bg-blue-400/10 text-blue-300 border-blue-500/20",
    IN_PROGRESS:
      "bg-purple-400/10 text-purple-300 border-purple-500/20",
    COMPLETED:
      "bg-green-400/10 text-green-300 border-green-500/20",
    CANCELLED:
      "bg-red-400/10 text-red-300 border-red-500/20",
  };

  const style =
    styles[status] ||
    "bg-slate-400/10 text-slate-300 border-slate-500/20";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${style}`}
    >
      {formatStatus(status)}
    </span>
  );
}

function formatStatus(status: string) {
  return status
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}