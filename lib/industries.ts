import {
  Factory,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  Truck,
  Briefcase,
  Package,
  BatteryCharging,
  Car,
  Laptop,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  model: string;
  caps: string[];
  visibility: string;
  flow?: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    desc: "Production planning, inventory, procurement, and quality management with real-time visibility on the floor.",
    model:
      "Demand-driven production from procured components through to finished, quality-checked goods.",
    caps: ["Manufacturing", "Procurement", "Inventory", "Production", "Quality Control", "Finance", "Dashboards & Reporting"],
    visibility: "Production and margin dashboards tied to procurement cost.",
    flow: ["Demand", "Procurement", "Components", "Production", "Quality", "Finished Goods"],
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    desc: "Keep inventory in sync, manage orders, and engage customers with scalable CRM and ERP systems.",
    model: "Multi-channel selling with inventory, pricing and orders staying in sync across every storefront.",
    caps: ["Sales", "Inventory", "Order Management", "Customer Management", "Finance", "Dashboards & Reporting"],
    visibility: "Sales and stock dashboards across every channel.",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient management, billing, appointment scheduling, and operational tracking with data privacy intact.",
    model: "Patient interactions tied to scheduling and billing.",
    caps: ["CRM", "Operations", "Billing", "Workflow Automation", "Finance", "Reporting"],
    visibility: "Billing and utilization dashboards.",
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Education",
    desc: "Admissions, student records, fee management, communication, and reporting in one integrated system.",
    model: "Admissions-driven enrollment with recurring fee cycles.",
    caps: ["Lead Management", "Admissions", "Student Operations", "Fees", "Workflow Automation", "Reporting"],
    visibility: "Admissions and fee-collection dashboards.",
  },
  {
    slug: "financial-services",
    icon: Landmark,
    title: "Financial Services",
    desc: "Automation tools, CRM systems, and analytics platforms for reporting accuracy and compliance tracking.",
    model: "Client relationships and transactions that need to stay accurate, auditable and compliant.",
    caps: ["CRM", "Compliance Tracking", "Workflow Automation", "Analytics", "Reporting"],
    visibility: "Compliance and reporting-accuracy dashboards.",
  },
  {
    slug: "real-estate",
    icon: Building2,
    title: "Real Estate",
    desc: "Lead management, property listings, contracts, and post-sale service across the full customer lifecycle.",
    model: "Project-based sales with long booking-to-collection cycles.",
    caps: ["Lead Management", "Property / Project Management", "Sales Pipeline", "Booking", "Customer Management", "Collections", "Finance", "Workflow Automation", "Dashboards & Reporting"],
    visibility: "Booking and collections dashboards tied to project inventory.",
    flow: ["Lead", "Opportunity", "Property / Project", "Booking", "Collection", "Finance", "Management Dashboard"],
  },
  {
    slug: "logistics-supply-chain",
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Shipment tracking, warehouse management, order fulfilment, and vendor coordination in real time.",
    model: "Goods moving across warehouses, carriers and vendors that all need to stay coordinated in real time.",
    caps: ["Shipment Tracking", "Warehouse Management", "Order Fulfilment", "Vendor Coordination", "Finance", "Dashboards & Reporting"],
    visibility: "Fulfilment and vendor-performance dashboards.",
  },
  {
    slug: "it-professional-services",
    icon: Briefcase,
    title: "IT & Professional Services",
    desc: "Project management systems, client portals, time tracking, and billing automation.",
    model: "Billable work delivered against projects, tracked from timesheet through to invoice.",
    caps: ["Project Management", "Client Portals", "Time Tracking", "Billing Automation", "Finance", "Reporting"],
    visibility: "Utilization and project-profitability dashboards.",
  },
  {
    slug: "trading-distribution",
    icon: Package,
    title: "Trading & Distribution",
    desc: "Tight control over inventory, procurement, and sales with automated reordering.",
    model: "Buy-sell operations across multiple warehouses and price lists.",
    caps: ["Sales", "Purchase", "Inventory", "Warehouse", "Procurement", "Finance", "Customer Management", "Dashboards & Reporting"],
    visibility: "Stock ageing and margin dashboards across warehouses.",
  },
  {
    slug: "ev-manufacturing",
    icon: BatteryCharging,
    title: "EV Manufacturing",
    desc: "Vehicle assembly from procured components, sold through direct or dealer channels, with production and margin visibility.",
    model: "Vehicle assembly from procured components, sold through direct or dealer channels.",
    caps: ["Manufacturing", "Procurement", "Inventory", "Production", "Operations", "Finance", "Dashboards & Reporting"],
    visibility: "Production and margin dashboards tied to procurement cost.",
  },
  {
    slug: "automobile",
    icon: Car,
    title: "Automobile",
    desc: "Vehicle sales combined with ongoing service revenue, tracked across the full ownership lifecycle.",
    model: "Vehicle sales combined with ongoing service revenue.",
    caps: ["Sales", "CRM", "Inventory", "Procurement", "Service", "Finance", "Dashboards & Reporting"],
    visibility: "Sales and service dashboards across the ownership lifecycle.",
  },
  {
    slug: "laptop-manufacturing-refurbishment",
    icon: Laptop,
    title: "Laptop Manufacturing & Refurbishment",
    desc: "Device manufacturing alongside a full refurbishment and resale operation, with warranty and yield tracking.",
    model: "Device manufacturing alongside a full refurbishment and resale operation.",
    caps: ["Manufacturing", "Refurbishment Operations", "Serial / Asset Tracking", "Spare Parts Management", "Procurement", "Inventory & Warehouse", "Repair & Replacement", "Quality Control", "Sales & Distribution", "Warranty / Service", "Finance", "Dashboards & Reporting"],
    visibility: "Refurbishment yield and warranty-cost dashboards by device batch.",
    flow: ["Device Received", "Inspection", "Repair", "Spare Parts", "QC", "Refurbished Inventory", "Sales", "Warranty", "Finance", "Dashboard"],
  },
  {
    slug: "event-management",
    icon: PartyPopper,
    title: "Event Management",
    desc: "Project-based delivery coordinated across vendors and timelines, with per-engagement profitability tracking.",
    model: "Project-based delivery coordinated across vendors and timelines.",
    caps: ["Lead Management", "Event Operations", "Vendor Management", "Project Coordination", "Finance", "Reporting"],
    visibility: "Per-engagement profitability dashboards.",
  },
];
