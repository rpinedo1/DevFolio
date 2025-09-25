export type Project = {
  title: string;
  description: string;
  image?: string | null; // replace with an imported image variable if you prefer
  technologies: string[];
  achievements: string[];
  type: string;
};

export const projects: Project[] = [
  {
    title: "Firestorm Implementation: Cross-Team Service Architecture and Launch",
    description:
      "Co‑architected and launched a unified push notification service for Prime Video, built with CDK and Lambda, introduced integration patterns with ACN, and led Operational Readiness to a zero‑incident production launch.",
    image: null,
    technologies: ["TypeScript", "AWS CDK", "Kotlin", "Lambda", "API Gateway"],
    achievements: [
      "Complete service infrastructure deployed with CDK",
      "Zero customer‑facing incidents at launch",
      "99.9% availability during initial launch",
      "Reusable CDK patterns adopted by other teams"
    ],
    type: "Professional Project",
  },

  {
    title: "Image Optimization Initiative: Performance and Cost Impact at Scale",
    description:
      "Led a WebP conversion and image URL transformation initiative that drastically reduced image payloads, refactored legacy image processing, and rolled out client‑safe optimization using weblabs and monitoring to validate improvements.",
    image: null,
    technologies: ["WebP", "Image Processing", "Monitoring", "Rollout/WeBlabs", "Cloud"],
    achievements: [
      "Automated WebP conversion pipeline",
      "Significant average image size reduction and bandwidth savings",
      "Refactored legacy processing to eliminate card drops",
      "Controlled weblab rollout and monitoring framework"
    ],
    type: "Professional Project",
  },

  {
    title: "Client Telemetry Infrastructure: Data Quality and Operational Excellence",
    description:
      "Designed and shipped a scalable telemetry monitoring system with real‑time data quality validation, dashboards, and automated alerts across multiple Prime Video client platforms and regions.",
    image: null,
    technologies: ["CloudWatch", "Dashboards", "Alerting", "Data Validation", "CloudFormation"],
    achievements: [
      "Real‑time data quality validation across clients",
      "Scalable CloudFormation architecture split by client/region",
      "Automated alerting and runbooks for rapid response",
      "Detected and prevented measurement discrepancies" 
    ],
    type: "Professional Project",
  },

  {
    title: "Security Infrastructure: Proactive Risk Mitigation",
    description:
      "Performed forensic analyses across multiple AWS regions, fixed systematic misconfigurations with CDK fixes, and established monitoring and processes to prevent recurrence of security exposures.",
    image: null,
    technologies: ["AWS", "CDK", "Forensics", "Monitoring", "Security"],
    achievements: [
      "Comprehensive forensic analysis and remediation",
      "CDK‑based infrastructure fixes preventing recurrence",
      "Monitoring and alerting to detect similar issues",
      "Organizational documentation and knowledge sharing"
    ],
    type: "Professional Project",
  },

  {
    title: "REMASTER ECX Launch: Complex Multi‑Service Implementation",
    description:
      "Implemented Educational CX notifications across multiple services with Sonata Items and ImageID integration, managed localization at scale, and delivered validation frameworks and strategies for complex campaign rollout.",
    image: null,
    technologies: ["Sonata", "Localization", "Notifications", "Integration Testing"],
    achievements: [
      "11+ Sonata strategies implemented",
      "First‑of‑its‑kind Sonata Items & ImageID integration",
      "Streamlined localization for 35 copy strings",
      "Dynamic notification scheduling and validation frameworks"
    ],
    type: "Professional Project",
  },

  {
    title: "tvOS ECX Notification Support: Proactive Technical Leadership",
    description:
      "Added tvOS support in PVHedwig and PVProtego with test & production Sonata strategies, custom business logic for Apple TV, and testing frameworks enabling end‑to‑end validation.",
    image: null,
    technologies: ["tvOS", "Sonata", "PVHedwig", "PVProtego", "Testing"],
    achievements: [
      "Test and production strategies enabling immediate validation",
      "Custom business logic for Apple TV notification delivery",
      "Comprehensive tvOS testing framework",
      "Delivered ahead of client testing schedules"
    ],
    type: "Professional Project",
  },

  {
    title: "Project Harlequin: Architecting Global Promotional Content Support",
    description:
      "Implemented GPCI identifiers and transforms to enable autoplay and promotional content without single title association, adding validation and rollout controls for global promotional campaigns.",
    image: null,
    technologies: ["Transforms", "Feature Flags", "Promotions", "HighFidelityData"],
    achievements: [
      "GPCI implementation enabling autoplay for non‑title content",
      "Validation and testing frameworks for promotional campaigns",
      "Integration patterns adopted by other teams"
    ],
    type: "Professional Project",
  },

  {
    title: "BK4C Phase 1 & 2: Customer Experience Resilience",
    description:
      "Expanded BeeKeeper for Clients (BK4C) support to protect fallback experiences across collection and detail pages, adding monitoring and metrics to measure resilience effectiveness.",
    image: null,
    technologies: ["Resiliency", "Monitoring", "Firebolt", "Metrics"],
    achievements: [
      "Expanded customer experience protection coverage",
      "Comprehensive metrics and dashboards for BK4C",
      "Validation frameworks ensuring reliable fallback delivery"
    ],
    type: "Professional Project",
  },

  {
    title: "Protego Multiple Notifications: Architecture Enhancement",
    description:
      "Enhanced Protego and Notification Page Section to return multiple notifications (compliance + education) in a single response, with prioritization logic and cross‑team validation.",
    image: null,
    technologies: ["Protego", "Notifications", "Prioritization"],
    achievements: [
      "Multiple notification delivery support",
      "Prioritization logic to handle compliance vs showable notifications",
      "Testing and validation across client platforms"
    ],
    type: "Professional Project",
  },

  {
    title: "Portkey Migration: Strategic Infrastructure Modernization",
    description:
      "Led Firebolt migration to Portkey routing layer to enable multi‑region routing, improve resiliency, and reduce compute bottlenecks while ensuring zero customer impact during rollout.",
    image: null,
    technologies: ["Routing", "Migration", "Monitoring", "Multi‑region"],
    achievements: [
      "Successful Portkey migration with multi‑region routing",
      "Monitoring and validation frameworks",
      "Weighted routing enabling future traffic distribution"
    ],
    type: "Professional Project",
  },

  {
    title: "Sandfire Onboarding: Turning Ambiguity into Success",
    description:
      "Restarted and completed PVHedwig and PVDataCollectionService onboarding to the Sandfire data deletion tool, expediting approvals and creating documentation to meet regulatory timelines.",
    image: null,
    technologies: ["Compliance", "Integration", "Sandfire", "Onboarding"],
    achievements: [
      "Completed Sandfire onboarding meeting compliance requirements",
      "Expedited Kale approval process",
      "Comprehensive documentation enabling future onboarding"
    ],
    type: "Professional Project",
  },

  {
    title: "Pre‑orders Project: Cross‑Team Technical Leadership",
    description:
      "Implemented Pre‑order functionality in PVDE with new transformation logic, end‑to‑end testing, and mentoring to enable customers to pre‑order without leaving the PVDE experience.",
    image: null,
    technologies: ["PVDE", "TAPS", "Data Transformation", "Testing"],
    achievements: [
      "Enabled pre‑orders directly in PVDE",
      "Comprehensive end‑to‑end testing procedures",
      "Mentored engineers and created documentation for handoff"
    ],
    type: "Professional Project",
  }
];

export default projects;
