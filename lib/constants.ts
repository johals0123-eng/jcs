export const COMPANY = {
  name: "Johal Crane Services",
  shortName: "Johal Crane",
  owner: "Dalbir Singh",

  phone: "+91 8198841313",
  whatsapp: "+91 8198841313",
  email: "johalcrane123@gmail.com",

  address:
    "NH-49, Jharsuguda - Raigarh Rd, near Tata Workshop, H.K, Katapali, Jharsuguda, Odisha 768202",

  location: "Jharsuguda, Odisha, India",

  serviceArea: "All Odisha & Chhattisgarh",

  availability: "24/7 Service",

  googleMaps: "",

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export const CRANE_TYPES = [
  {
    name: "Mobile Crane",
    slug: "mobile-crane",
    description:
      "Flexible mobile lifting solutions for construction, infrastructure and industrial operations.",
    capacity: "Capacity available on request",
  },
  {
    name: "Telescopic Crane",
    slug: "telescopic-crane",
    description:
      "Versatile telescopic crane solutions for demanding lifting and material handling requirements.",
    capacity: "Capacity available on request",
  },
  {
    name: "Crawler Crane",
    slug: "crawler-crane",
    description:
      "Heavy-duty crawler crane solutions for challenging industrial and construction environments.",
    capacity: "Capacity available on request",
  },
  {
    name: "Tyre Mounted Crane",
    slug: "tyre-mounted-crane",
    description:
      "Efficient tyre-mounted crane solutions for flexible lifting operations across different sites.",
    capacity: "Capacity available on request",
  },
] as const;

export const SERVICES = [
  "Crane Rental",
  "Heavy Lifting",
  "Industrial Equipment Shifting",
  "Machinery Installation",
  "Construction Lifting",
  "Structural Lifting",
  "Heavy Equipment Transportation",
  "Industrial Plant Operations",
  "Crane Operator Services",
  "Project-Based Crane Rental",
  "Emergency Crane Services",
] as const;

export const INDUSTRIES = [
  "Construction",
  "Infrastructure",
  "Steel & Manufacturing",
  "Power & Energy",
  "Mining",
  "Industrial Plants",
  "Warehousing & Logistics",
  "Road & Bridge Projects",
  "Engineering & Fabrication",
  "Government Projects",
] as const;