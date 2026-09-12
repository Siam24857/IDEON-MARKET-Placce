import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../packages/database/src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

const CATEGORIES: {
  name: string;
  slug: string;
  description: string;
  icon: string;
  sub: { name: string; slug: string }[];
}[] = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Business sites, e-commerce, full-stack apps and more",
    icon: "Globe",
    sub: [
      { name: "Full Stack", slug: "full-stack" },
      { name: "Frontend", slug: "frontend" },
      { name: "Backend", slug: "backend" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Node.js", slug: "nodejs" },
      { name: "Landing Page", slug: "landing-page" },
    ],
  },
  {
    name: "E-commerce",
    slug: "e-commerce",
    description: "Online stores and marketplace platforms",
    icon: "ShoppingCart",
    sub: [
      { name: "Shopify", slug: "shopify" },
      { name: "Custom Store", slug: "custom-store" },
      { name: "Marketplace", slug: "marketplace" },
      { name: "Payments", slug: "payments" },
    ],
  },
  {
    name: "Full Stack Development",
    slug: "full-stack-development",
    description: "Complete applications from database to interface",
    icon: "Layers",
    sub: [
      { name: "SaaS Application", slug: "saas-application" },
      { name: "Admin Dashboard", slug: "admin-dashboard" },
      { name: "API Development", slug: "api-development" },
      { name: "Custom Web App", slug: "custom-web-app" },
    ],
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Beautiful interfaces and delightful experiences",
    icon: "PenTool",
    sub: [
      { name: "Website Design", slug: "website-design" },
      { name: "Mobile App Design", slug: "mobile-app-design" },
      { name: "Design System", slug: "design-system" },
      { name: "Prototyping", slug: "prototyping" },
    ],
  },
  {
    name: "AI Development",
    slug: "ai-development",
    description: "AI-powered websites and intelligent automation",
    icon: "Cpu",
    sub: [
      { name: "AI Chatbot", slug: "ai-chatbot" },
      { name: "LLM Integration", slug: "llm-integration" },
      { name: "AI Website", slug: "ai-website" },
      { name: "ML Pipelines", slug: "ml-pipelines" },
    ],
  },
  {
    name: "Vibe Coding",
    slug: "vibe-coding",
    description: "Rapid AI-assisted website and app creation",
    icon: "Zap",
    sub: [
      { name: "AI-Generated Website", slug: "ai-generated-website" },
      { name: "Prototype", slug: "prototype" },
      { name: "MVP", slug: "mvp" },
    ],
  },
  {
    name: "Mobile Apps",
    slug: "mobile-apps",
    description: "Native and cross-platform mobile applications",
    icon: "Smartphone",
    sub: [
      { name: "iOS", slug: "ios" },
      { name: "Android", slug: "android" },
      { name: "React Native", slug: "react-native" },
      { name: "Flutter", slug: "flutter" },
    ],
  },
  {
    name: "SaaS",
    slug: "saas",
    description: "Subscription products and platforms",
    icon: "Cloud",
    sub: [
      { name: "MVP", slug: "saas-mvp" },
      { name: "Billing & Plans", slug: "billing-plans" },
      { name: "Team Features", slug: "team-features" },
    ],
  },
  {
    name: "Automation",
    slug: "automation",
    description: "Workflows and process automation",
    icon: "Workflow",
    sub: [
      { name: "Zapier", slug: "zapier" },
      { name: "Custom Scripts", slug: "custom-scripts" },
      { name: "Data Sync", slug: "data-sync" },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    code: "first-purchase",
    title: "First Purchase",
    description: "Place your first order on the marketplace",
    icon: "ShoppingBag",
    xpReward: 50,
    category: "BUYER",
  },
  {
    code: "first-review",
    title: "First Review",
    description: "Leave a review after a completed order",
    icon: "MessageSquare",
    xpReward: 20,
    category: "BUYER",
  },
  {
    code: "first-service",
    title: "First Service",
    description: "Publish your first service",
    icon: "Package",
    xpReward: 100,
    category: "FREELANCER",
  },
  {
    code: "first-delivery",
    title: "First Delivery",
    description: "Deliver your first order",
    icon: "Truck",
    xpReward: 80,
    category: "FREELANCER",
  },
  {
    code: "ten-completed-orders",
    title: "10 Completed Orders",
    description: "Complete 10 orders as a freelancer",
    icon: "Trophy",
    xpReward: 200,
    category: "FREELANCER",
  },
  {
    code: "top-buyer",
    title: "Top Buyer",
    description: "Purchase 50 services on the marketplace",
    icon: "Crown",
    xpReward: 500,
    category: "BUYER",
  },
  {
    code: "top-freelancer",
    title: "Top Freelancer",
    description: "Reach top-rated freelancer level",
    icon: "Award",
    xpReward: 1000,
    category: "FREELANCER",
  },
  {
    code: "profile-complete",
    title: "Profile Complete",
    description: "Complete your public profile",
    icon: "UserCheck",
    xpReward: 30,
    category: "ALL",
  },
];

const SETTINGS: { key: string; type: string; value: string; description: string }[] = [
  { key: "platform.name", type: "STRING", value: "IDEONS Marketplace", description: "Display name of the platform" },
  { key: "platform.commissionPercent", type: "NUMBER", value: "10", description: "Platform commission % on each sale" },
  { key: "platform.currency", type: "STRING", value: "USD", description: "Default platform currency" },
  { key: "platform.minServicePrice", type: "NUMBER", value: "500", description: "Minimum service price in cents" },
  { key: "platform.maxServicePrice", type: "NUMBER", value: "10000000", description: "Maximum service price in cents" },
  { key: "platform.serviceApprovalRequired", type: "BOOLEAN", value: "true", description: "Require admin approval before publishing" },
  { key: "platform.freelancerVerificationRequired", type: "BOOLEAN", value: "true", description: "Require freelancer verification" },
  { key: "platform.maintenanceMode", type: "BOOLEAN", value: "false", description: "Put the platform in maintenance mode" },
  { key: "notifications.emailEnabled", type: "BOOLEAN", value: "true", description: "Send transactional emails" },
];

function placeholderImage(text: string, from = "#6366f1", to = "#a855f7") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="400" y="255" font-family="Arial, sans-serif" font-size="34" fill="rgba(255,255,255,.92)" text-anchor="middle" font-weight="bold">${text}</text></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

const DEMO_SERVICES = [
  {
    title: "Vibe Coding Business Website",
    slug: "vibe-coding-business-website",
    category: "Vibe Coding",
    subcategory: "AI-Generated Website",
    type: "SERVICE",
    shortDescription: "AI-assisted modern website built fast with premium quality",
    description:
      "Get a stunning, modern website created with the latest vibe coding techniques. I use AI acceleration combined with experienced craftsmanship to deliver a polished, production-ready website in record time.\n\nPerfect for startups, small businesses, and personal brands that need a web presence fast without sacrificing quality.",
    tags: ["vibe coding", "ai", "website", "fast delivery"],
    technologies: ["Next.js", "React", "Tailwind CSS", "AI tools"],
    minPrice: 8000,
    maxPrice: 25000,
    deliveryTime: 3,
    revisions: 2,
    isFeatured: true,
    packages: [
      { name: "BASIC", title: "Starter Site", price: 8000, deliveryTime: 3, revisions: 1, features: ["1 landing page", "Fast delivery", "Basic SEO"] },
      { name: "STANDARD", title: "Business Website", price: 22000, deliveryTime: 5, revisions: 3, features: ["Up to 5 pages", "Contact form", "SEO setup", "Mobile optimized"] },
      { name: "PREMIUM", title: "Full-Stack E-commerce Website", price: 50000, deliveryTime: 12, revisions: 5, features: ["Full e-commerce store", "Payment integration", "Admin dashboard", "Analytics", "Priority support"] },
    ],
    faqs: [
      { question: "How fast can you deliver?", answer: "Basic vibes-code sites ship in 1–3 days. Larger e-commerce builds take up to two weeks." },
      { question: "Do I own the code?", answer: "Yes, full ownership of the final code is transferred on delivery." },
    ],
  },
  {
    title: "Professional Business Website",
    slug: "professional-business-website",
    category: "Web Development",
    subcategory: "Next.js",
    type: "DIGITAL_PRODUCT",
    shortDescription: "Premium multi-page business site with CMS-ready architecture",
    description:
      "A premium, conversion-focused business website built with Next.js. Includes a modular design system, blazing-fast performance, and a clean, scalable architecture.\n\nDelivered as a ready-to-deploy project with documentation included.",
    tags: ["business", "next.js", "responsive", "seo"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    minPrice: 22000,
    maxPrice: 60000,
    deliveryTime: 7,
    revisions: 3,
    isFeatured: true,
    packages: [
      { name: "BASIC", title: "1-Page Site", price: 22000, deliveryTime: 5, revisions: 2, features: ["1 page design", "Responsive", "Contact form"] },
      { name: "STANDARD", title: "Business Bundle", price: 45000, deliveryTime: 8, revisions: 4, features: ["Up to 8 pages", "Blog setup", "SEO ready", "Analytics"] },
      { name: "PREMIUM", title: "Complete Package", price: 75000, deliveryTime: 14, revisions: 6, features: ["Custom CMS", "Multi-language", "Admin panel", "Support 30 days"] },
    ],
    faqs: [
      { question: "What is included in the repository delivery?", answer: "Full source code, environment setup guide and deployment documentation." },
    ],
  },
  {
    title: "Next.js E-commerce Platform",
    slug: "nextjs-ecommerce-platform",
    category: "E-commerce",
    subcategory: "Custom Store",
    type: "DIGITAL_PRODUCT",
    shortDescription: "Full-featured online store with payments and admin",
    description:
      "A production-ready e-commerce platform built with Next.js, including product catalog, cart, Stripe checkout, order management, and a custom admin dashboard.\n\nIdeal for selling physical products or digital goods with a professional storefront.",
    tags: ["ecommerce", "stripe", "store", "next.js"],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    minPrice: 50000,
    maxPrice: 150000,
    deliveryTime: 10,
    revisions: 3,
    isFeatured: true,
    packages: [
      { name: "BASIC", title: "Core Store", price: 50000, deliveryTime: 10, revisions: 2, features: ["Up to 50 products", "Cart & Checkout", "Stripe payments", "Order emails"] },
      { name: "STANDARD", title: "Growth Store", price: 90000, deliveryTime: 16, revisions: 4, features: ["Unlimited products", "Coupons", "Reviews", "Admin dashboard"] },
      { name: "PREMIUM", title: "Enterprise Store", price: 150000, deliveryTime: 24, revisions: 6, features: ["Multi-vendor", "Advanced analytics", "Multi-currency", "Priority support"] },
    ],
    faqs: [
      { question: "Can you migrate my existing store?", answer: "Yes, I can migrate products from Shopify, WooCommerce and other platforms." },
    ],
  },
  {
    title: "Full-Stack SaaS Application",
    slug: "full-stack-saas-application",
    category: "SaaS",
    subcategory: "MVP",
    type: "SERVICE",
    shortDescription: "Custom SaaS app from idea to launch-ready MVP",
    description:
      "End-to-end SaaS development: authentication, billing/subscriptions, team features, admin, and a polished interface. You bring the idea, I handle the build.\n\nCustom pricing based on scope — book a consultation to get an accurate quote.",
    tags: ["saas", "subscription", "stripe", "custom"],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    minPrice: 100000,
    maxPrice: 500000,
    deliveryTime: 30,
    revisions: 5,
    packages: [
      { name: "BASIC", title: "MVP", price: 100000, deliveryTime: 21, revisions: 3, features: ["Core feature set", "Auth", "1 integration", "Deploy setup"] },
      { name: "STANDARD", title: "Growth", price: 250000, deliveryTime: 40, revisions: 5, features: ["Billing & plans", "Admin dashboard", "Analytics", "2 integrations"] },
      { name: "PREMIUM", title: "Enterprise", price: 500000, deliveryTime: 60, revisions: 8, features: ["Advanced architecture", "Multi-tenant", "CI/CD", "30 days support"] },
    ],
    faqs: [
      { question: "How is custom pricing determined?", answer: "After a scope call, you get a fixed-price quote. All pricing is agreed before work starts." },
    ],
  },
  {
    title: "Custom Admin Dashboard",
    slug: "custom-admin-dashboard",
    category: "Full Stack Development",
    subcategory: "Admin Dashboard",
    type: "DIGITAL_PRODUCT",
    shortDescription: "Powerful data dashboard with charts, tables and roles",
    description:
      "A custom admin dashboard with data visualization (Recharts), advanced tables, role-based access, and audit logging. Built to your exact data model.",
    tags: ["dashboard", "admin", "analytics", "charts"],
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    minPrice: 35000,
    maxPrice: 80000,
    deliveryTime: 8,
    revisions: 3,
    packages: [
      { name: "BASIC", title: "Metrics", price: 35000, deliveryTime: 6, revisions: 2, features: ["5 dashboard widgets", "Charts", "Data table"] },
      { name: "STANDARD", title: "Full Dashboard", price: 60000, deliveryTime: 12, revisions: 4, features: ["Custom charts", "Filters & export", "User management"] },
      { name: "PREMIUM", title: "Enterprise", price: 80000, deliveryTime: 18, revisions: 6, features: ["Multi-role", "Audit logs", "Notifications", "API docs"] },
    ],
    faqs: [],
  },
];

const JOB_COMPANIES = [
  {
    name: "Acme Nigeria",
    slug: "acme-nigeria",
    industry: "Technology",
    location: "Lagos, Nigeria",
    description:
      "Leading African fintech building the future of payments and commerce infrastructure for merchants across the continent.",
    size: "51-200",
    website: "https://example.com",
  },
  {
    name: "Sunrise Digital",
    slug: "sunrise-digital",
    industry: "Design",
    location: "Nairobi, Kenya",
    description:
      "Product design agency crafting beautiful, functional interfaces for startups and enterprises worldwide.",
    size: "11-50",
    website: "https://example.com",
  },
];

const DEMO_JOBS = [
  {
    companySlug: "acme-nigeria",
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    description:
      "We are looking for a senior full-stack engineer to help build and scale our core payment APIs and merchant dashboard.\n\nYou will work across the stack with Next.js, Node, PostgreSQL and Redis to deliver reliable, fast features.",
    requirements:
      "5+ years shipping production software\nStrong TypeScript and SQL\nExperience with payment or fintech systems is a plus",
    location: "Lagos, Nigeria",
    remote: true,
    type: "FULL_TIME",
    level: "SENIOR",
    category: "Engineering",
    tags: ["typescript", "node", "postgres", "redis", "fintech"],
    salaryMin: 400000,
    salaryMax: 700000,
    currency: "NGN",
  },
  {
    companySlug: "acme-nigeria",
    slug: "frontend-developer",
    title: "Frontend Developer",
    description:
      "Help build beautiful, accessible and performant merchant-facing dashboards using Next.js and Tailwind CSS.",
    requirements:
      "2+ years with React/Next.js\nGood eye for design\nFamiliarity with TypeScript",
    location: "Remote",
    remote: true,
    type: "FULL_TIME",
    level: "MID",
    category: "Engineering",
    tags: ["react", "next", "tailwind", "typescript"],
    salaryMin: 200000,
    salaryMax: 400000,
    currency: "NGN",
  },
  {
    companySlug: "acme-nigeria",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    description:
      "Own our deployment pipelines, infrastructure and reliability. You will work with Docker, AWS and Terraform to keep the platform fast and secure.",
    requirements:
      "3+ years in DevOps/SRE\nStrong Linux and networking knowledge\nAWS or GCP experience",
    location: "Lagos, Nigeria",
    remote: false,
    type: "FULL_TIME",
    level: "MID",
    category: "DevOps",
    tags: ["docker", "aws", "terraform", "linux"],
    salaryMin: 350000,
    salaryMax: 600000,
    currency: "NGN",
  },
  {
    companySlug: "sunrise-digital",
    slug: "product-designer",
    title: "Product Designer",
    description:
      "Design end-to-end product experiences for web and mobile. You will run workshops, prototype in Figma and partner closely with engineering.",
    requirements:
      "Strong portfolio showing a full product design process\nFigma proficiency\nExcellent communication skills",
    location: "Nairobi, Kenya",
    remote: true,
    type: "CONTRACT",
    level: "SENIOR",
    category: "Design",
    tags: ["figma", "ux", "ui", "product"],
    salaryMin: 3000,
    salaryMax: 6000,
    currency: "USD",
  },
  {
    companySlug: "sunrise-digital",
    slug: "ui-design-intern",
    title: "UI Design Intern",
    description:
      "Learn and contribute to visual design for client projects. You will assist senior designers, create mockups and learn modern design systems.",
    requirements:
      "Basic Figma knowledge\nEagerness to learn\nDesign portfolio or personal projects",
    location: "Nairobi, Kenya",
    remote: false,
    type: "INTERNSHIP",
    level: "JUNIOR",
    category: "Design",
    tags: ["figma", "design", "intern"],
    salaryMin: 500,
    salaryMax: 800,
    currency: "USD",
  },
];

const DEMO_FREELANCERS = [
  {
    name: "Aisha Rahman",
    username: "aisha-builds",
    email: "demo.freelancer@ideons.local",
    bio: "Full-stack developer with 6 years of experience building fast, beautiful web products.",
    skills: ["Next.js", "React", "TypeScript", "Stripe", "Prisma"],
    languages: ["English", "Hindi"],
    location: "Dhaka, Bangladesh",
    title: "Full-Stack Engineer",
    about:
      "I build production-grade web applications — from marketing sites to complex SaaS platforms. Obsessed with performance, accessibility, and clean code.",
    ratingValue: 4.9,
    reviewCount: 128,
    completedOrders: 156,
  },
  {
    name: "Marco Silva",
    username: "marco-ui",
    email: "demo.freelancer2@ideons.local",
    bio: "UI/UX designer crafting premium interfaces and design systems.",
    skills: ["Figma", "UI Design", "Design Systems", "Prototyping"],
    languages: ["English", "Portuguese"],
    location: "Lisbon, Portugal",
    title: "Product Designer",
    about:
      "Award-winning product designer. I turn complex problems into elegant, usable interfaces that users love.",
    ratingValue: 4.8,
    reviewCount: 87,
    completedOrders: 112,
  },
];

async function main() {
  console.log("Cleaning previous data…");
  await prisma.auditLog.deleteMany();
  await prisma.jobApplication.deleteMany();
  await prisma.resumeScore.deleteMany();
  await prisma.resume.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.job.deleteMany();
  await prisma.company.deleteMany();
  await prisma.user.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.platformSetting.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.subcategory.deleteMany();
  await prisma.category.deleteMany();

  console.log("Seeding IDEONS Marketplace…");

  const categories: Record<string, string> = {};
  const subcategories: Record<string, string> = {};

  for (const cat of CATEGORIES) {
    const created = await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        icon: cat.icon,
        sortOrder: CATEGORIES.indexOf(cat),
      },
    });
    categories[cat.name] = created.id;
    for (const sub of cat.sub) {
      const createdSub = await prisma.subcategory.create({
        data: {
          name: sub.name,
          slug: sub.slug,
          categoryId: created.id,
        },
      });
      subcategories[`${cat.name}/${sub.name}`] = createdSub.id;
    }
  }
  console.log(`Created ${CATEGORIES.length} categories`);

  for (const ach of ACHIEVEMENTS) {
    await prisma.achievement.create({ data: ach });
  }
  console.log(`Created ${ACHIEVEMENTS.length} achievements`);

  for (const s of SETTINGS) {
    await prisma.platformSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }
  console.log(`Created ${SETTINGS.length} platform settings`);

  const freelancerIds: string[] = [];
  for (const f of DEMO_FREELANCERS) {
    const user = await prisma.user.create({
      data: {
        name: f.name,
        username: f.username,
        email: f.email,
        emailVerified: true,
        bio: f.bio,
        skills: f.skills,
        languages: f.languages,
        location: f.location,
        role: "FREELANCER",
        status: "ACTIVE",
        verificationStatus: "VERIFIED",
        profileCompletion: 90,
        image: placeholderImage(f.name.split(" ")[0][0] + f.name.split(" ")[1][0], "#4f46e5", "#9333ea"),
        freelancerProfile: {
          create: {
            title: f.title,
            about: f.about,
            skills: f.skills,
            languages: f.languages,
            level: "TOP_RATED",
            responseRate: 98,
            responseTime: 2,
            onTimeDelivery: 99,
            completedOrders: f.completedOrders,
            successfulOrders: f.completedOrders,
            ratingValue: f.ratingValue,
            reviewCount: f.reviewCount,
            status: "ACTIVE",
            verified: true,
            submittedAt: new Date(),
            approvedAt: new Date(),
          },
        },
        buyerProfile: { create: {} },
        profile: { create: {} },
        xp: { create: { totalXp: 1200, level: 4 } },
      },
    });
    freelancerIds.push(user.id);

    await prisma.portfolio.create({
      data: {
        userId: user.id,
        title: `${f.name.split(" ")[0]}’s showcase project`,
        description: "A showcase project demonstrating best-in-class results.",
        image: placeholderImage("Portfolio", "#0891b2", "#6d28d9"),
        technologies: f.skills.slice(0, 3),
      },
    });
  }
  console.log(`Created ${DEMO_FREELANCERS.length} demo freelancers`);

  const demoBuyer = await prisma.user.create({
    data: {
      name: "Dan Test",
      username: "demobuyer",
      email: "demo.buyer@ideons.local",
      emailVerified: true,
      role: "BUYER",
      status: "ACTIVE",
      profileCompletion: 60,
      buyerProfile: { create: {} },
      profile: { create: {} },
      xp: { create: { totalXp: 220, level: 2 } },
    },
  });

  const admin = await prisma.user.create({
    data: {
      name: "IDEONS Admin",
      username: "ideonsadmin",
      email: "admin@ideons.local",
      emailVerified: true,
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      verificationStatus: "VERIFIED",
      profileCompletion: 100,
      buyerProfile: { create: {} },
      profile: { create: {} },
      xp: { create: { totalXp: 5000, level: 10 } },
    },
  });
  console.log(`Created demo buyer ${demoBuyer.username} and admin ${admin.username}`);

  for (const svc of DEMO_SERVICES) {
    const catId = categories[svc.category];
    const subId = subcategories[`${svc.category}/${svc.subcategory}`];
    const freelancerId = freelancerIds[DEMO_SERVICES.indexOf(svc) % freelancerIds.length];

    const service = await prisma.service.create({
      data: {
        slug: svc.slug,
        title: svc.title,
        shortDescription: svc.shortDescription,
        description: svc.description,
        user: { connect: { id: freelancerId } },
        category: { connect: { id: catId } },
        ...(subId ? { subcategory: { connect: { id: subId } } } : {}),
        type: svc.type,
        status: "PUBLISHED",
        tags: svc.tags,
        technologies: svc.technologies,
        minPrice: svc.minPrice,
        maxPrice: svc.maxPrice,
        deliveryTime: svc.deliveryTime,
        revisions: svc.revisions,
        isFeatured: svc.isFeatured,
        salesCount: 20 + DEMO_SERVICES.indexOf(svc) * 7,
        views: 300 + DEMO_SERVICES.indexOf(svc) * 150,
        ratingValue: 4.7 + (DEMO_SERVICES.indexOf(svc) % 3) * 0.1,
        reviewCount: 12 + DEMO_SERVICES.indexOf(svc) * 3,
        images: {
          create: [
            { url: placeholderImage(svc.title, "#4f46e5", "#a855f7"), alt: `${svc.title} — cover`, sortOrder: 0 },
            { url: placeholderImage(svc.title, "#0891b2", "#9333ea"), alt: `${svc.title} — preview 1`, sortOrder: 1 },
            { url: placeholderImage(svc.title, "#16a34a", "#2563eb"), alt: `${svc.title} — preview 2`, sortOrder: 2 },
          ],
        },
        packages: {
          create: svc.packages.map((p, i) => ({
            name: p.name,
            title: p.title,
            price: p.price,
            deliveryTime: p.deliveryTime,
            revisions: p.revisions,
            features: p.features,
            sortOrder: i,
          })),
        },
        faqs: {
          create: svc.faqs.map((f, i) => ({
            question: f.question,
            answer: f.answer,
            sortOrder: i,
          })),
        },
      },
    });
    console.log(`  → service: ${service.title} (${service.slug})`);
  }

  console.log("Seeding Job Hunter companies and jobs…");

  const jobCompanies: Record<string, string> = {};
  for (const cmp of JOB_COMPANIES) {
    const company = await prisma.company.upsert({
      where: { name: cmp.name },
      update: {
        slug: cmp.slug,
        industry: cmp.industry,
        location: cmp.location,
        description: cmp.description,
        size: cmp.size,
        website: cmp.website,
      },
      create: { ...cmp },
    });
    jobCompanies[cmp.slug] = company.id;
  }
  console.log(`Created ${JOB_COMPANIES.length} companies`);

  for (const job of DEMO_JOBS) {
    const existing = await prisma.job.findUnique({
      where: { slug: job.slug },
      select: { id: true },
    });
    if (existing) continue;
    await prisma.job.create({
      data: {
        slug: job.slug,
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        location: job.location,
        remote: job.remote,
        type: job.type,
        level: job.level,
        category: job.category,
        tags: job.tags,
        salaryMin: job.salaryMin,
        salaryMax: job.salaryMax,
        currency: job.currency,
        status: "OPEN",
        companyId: jobCompanies[job.companySlug],
      },
    });
  }
  console.log(`Created ${DEMO_JOBS.length} jobs`);

  console.log("Seed complete 🚀");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });