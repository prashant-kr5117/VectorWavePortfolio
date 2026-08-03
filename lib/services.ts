export type ServiceIcon =
  | "boxes"
  | "users"
  | "headset"
  | "calculator"
  | "user-cog";

export type ServiceTool = {
  name: string;
  desc: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  icon: ServiceIcon;
  tools: ServiceTool[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "zoho-bundled-suite",
    title: "Zoho Bundled Suite",
    short: "CRM, Finance, HR and Analytics set up as one connected suite.",
    intro:
      "Full-suite Zoho implementation covering everything from initial setup to customisation and go-live, all built around how your business actually works. We map your existing processes and configure the right combination of apps for better team efficiency and collaboration.",
    icon: "boxes",
    metaTitle: "Zoho Bundled Suite | Zoho Implementation & Setup Services",
    metaDescription:
      "Get every Zoho tool configured and live, built around your business. End-to-end implementation, one trusted partner, zero guesswork.",
    tools: [
      {
        name: "Zoho One",
        desc: "A complete business operating system integrating sales, marketing, finance, HR, and operations with real-time data access.",
      },
      {
        name: "Zoho CRM Plus",
        desc: "Consolidates sales, marketing, customer support, and analytics into a single platform for comprehensive customer visibility.",
      },
      {
        name: "Zoho Creator Plus",
        desc: "Enables custom app development and workflow automation without needing a full development team.",
      },
      {
        name: "Zoho Finance Plus",
        desc: "Unifies accounting, invoicing, inventory, expenses, and billing functions.",
      },
      {
        name: "Zoho People Plus",
        desc: "Covers the full employee journey from onboarding through performance tracking and learning.",
      },
      {
        name: "Zoho Projects Plus",
        desc: "Provides centralised project planning, task management, time tracking, and team collaboration.",
      },
      {
        name: "Zoho Workplace",
        desc: "Combines business email, document collaboration, video meetings, and team messaging.",
      },
    ],
  },
  {
    slug: "sales",
    title: "Sales",
    short: "Pipeline automation, lead capture and reporting built around your process.",
    intro:
      "Accelerate revenue growth and streamline your sales process with powerful Zoho sales applications. From lead capture to deal closure and customer engagement, these tools help businesses automate workflows, improve conversions, and deliver exceptional customer experiences.",
    icon: "users",
    metaTitle: "Zoho Sales Tools | Capture Leads & Close Deals Faster",
    metaDescription:
      "VectorWave sets up Zoho CRM, SalesIQ, Bigin, and Bookings to help your team capture more leads, automate follow-ups, and grow revenue faster.",
    tools: [
      {
        name: "Zoho CRM",
        desc: "Manage leads, contacts, and sales pipelines with automation, analytics, and AI insights that help teams close deals faster.",
      },
      {
        name: "Zoho Bigin",
        desc: "A straightforward CRM built for small businesses. Track deals, manage pipelines, and stay on top of customer interactions without the complexity.",
      },
      {
        name: "Zoho SalesIQ",
        desc: "Chat with website visitors in real time, track their behaviour, and turn prospects into qualified leads using automation and live chat tools.",
      },
      {
        name: "Zoho Bookings",
        desc: "Let customers book appointments online, sync with the calendar automatically, and send instant confirmations, no back and forth needed.",
      },
      {
        name: "Zoho Canvas",
        desc: "Redesign the CRM interface to match the way the team actually works, more intuitive, more visual, easier to use every day.",
      },
    ],
  },
  {
    slug: "it-support",
    title: "IT & Support",
    short: "Infrastructure, helpdesk and reliable uptime for your team.",
    intro:
      "Good support keeps customers happy and businesses running. Zoho's tools enable teams to handle tickets faster, resolve issues remotely, and deliver customer experiences people actually appreciate.",
    icon: "headset",
    metaTitle: "Zoho IT & Support | Helpdesk & Remote Support Tools",
    metaDescription:
      "VectorWave implements Zoho Desk, Assist, Lens, and FSM to help your support team resolve issues faster and keep customers satisfied.",
    tools: [
      {
        name: "Zoho Desk",
        desc: "Manages customer tickets with automated workflows, SLA tracking, and multi-channel support to prevent missed requests and maintain response times.",
      },
      {
        name: "Zoho Assist",
        desc: "Provides remote system connectivity for instant issue resolution, reducing downtime and accelerating IT team response capabilities.",
      },
      {
        name: "Zoho Lens",
        desc: "Delivers augmented reality guidance for real-time problem resolution without requiring on-site visits.",
      },
      {
        name: "Zoho FSM",
        desc: "Coordinates field service teams through intelligent scheduling, work order management, and mobile access for technicians.",
      },
    ],
  },
  {
    slug: "zoho-finance",
    title: "Zoho Finance",
    short: "Invoicing, expenses, compliance and reporting, kept in sync.",
    intro:
      "Zoho's financial tools consolidate accounting, billing, expenses, and inventory management into one unified platform, automating routine tasks and giving real-time visibility into business financial performance.",
    icon: "calculator",
    metaTitle: "Zoho Finance Solutions | Accounting, Billing & Inventory",
    metaDescription:
      "Zoho Books, Invoice, Inventory, and more all connected in one system. VectorWave sets it up so you always know exactly where your business stands financially.",
    tools: [
      {
        name: "Zoho Books",
        desc: "Accounting, GST/VAT compliance, invoicing, and bank reconciliation are all handled from one cloud-based platform.",
      },
      {
        name: "Zoho Invoice",
        desc: "Create professional invoices, automate payment reminders, and enable online payments to improve cash flow management.",
      },
      {
        name: "Zoho Expense",
        desc: "Employee expenses are tracked, approvals are automated, and spending stays under control with real-time reporting and policy rules.",
      },
      {
        name: "Zoho Inventory",
        desc: "Maintain accurate stock levels, purchase orders, and order fulfilment with up-to-date inventory data.",
      },
      {
        name: "Zoho Checkout",
        desc: "Collect one-time and recurring payments through secure, branded payment pages.",
      },
      {
        name: "Zoho Billing",
        desc: "Subscription billing, recurring invoices, and revenue tracking are automated so managing the customer billing cycle becomes effortless.",
      },
      {
        name: "Zoho Subscriptions",
        desc: "Manage subscription plans, handle upgrades and renewals, and automate billing with flexible pricing options.",
      },
    ],
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    short: "Recruitment, onboarding, attendance and payroll workflows.",
    intro:
      "Managing people is one of the most important parts of running a business. Zoho's HR tools bring recruitment, onboarding, attendance, payroll, and performance management into one connected system.",
    icon: "user-cog",
    metaTitle: "Zoho HR Solutions | People, Recruit & Payroll",
    metaDescription:
      "Manage your team from hire to retire. VectorWave implements Zoho People, Recruit, and Payroll to simplify HR - accurately, automatically, and compliantly.",
    tools: [
      {
        name: "Zoho People",
        desc: "A complete HR platform that manages the full employee journey, from the day someone joins to the day they leave, with automated workflows and real-time reporting built in.",
      },
      {
        name: "Zoho Recruit",
        desc: "A recruitment management system that simplifies hiring for businesses and staffing agencies, from posting jobs to scheduling interviews and making offers.",
      },
      {
        name: "Zoho Payroll",
        desc: "A reliable payroll solution that automates salary processing, tax calculations, and statutory compliance so every team member gets paid accurately and on time, every time.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.slug === slug);
}
