export type Experience = {
    company: string,
    role: string,
    period: string,
    location: string,
    description: string,
    achievements: string[],
    technologies: string[]
};

export const experiences: Experience[] = [
    {
      company: "Amazon",
      role: "Software Development Engineer II",
      period: "February 2022 – Present",
      location: "Remote",
      description: "Engineering large-scale distributed systems for Prime Video's global streaming platform",
      achievements: [
        "Engineered systems supporting 220M+ customers with sub-second latency requirements",
        "Built monitoring frameworks improving incident detection by 40%",
        "Automated infrastructure for 8+ services across 3 AWS regions using TypeScript CDK",
        "Developed telemetry pipelines preventing revenue-impacting tracking errors",
        "Led security hardening preventing dozens of infrastructure vulnerabilities",
        "Directed load testing for major live events (Copa Do Brazil, Thursday Night Football)"
      ],
      technologies: ["Java", "Kotlin", "TypeScript", "AWS", "Lambda", "CloudWatch", "CDK"]
    },
    {
      company: "Intel Corporation",
      role: "Graphics Software Engineer",
      period: "March 2019 – February 2022",
      location: "Santa Clara, CA",
      description: "Developing graphics drivers and visual technologies for Intel integrated graphics",
      achievements: [
        "Engineered automated build tracking reducing build times by 35 minutes for 1,000+ daily builds",
        "Led migration of 387 graphics driver projects from Gerrit to GitHub",
        "Streamlined workflows for 3,000 developers, boosting productivity by 20%",
        "Implemented C++ and C# rendering techniques for 6DoF immersive experiences",
        "Automated driver integration testing, halving test cycle times"
      ],
      technologies: ["Python", "C++", "C#", "OOP", "Event Tracing", "Chrome Tracing"]
    },
    {
      company: "Jacobs Technology (TOSC)",
      role: "Software Engineering Intern",
      period: "May 2018 – August 2018",
      location: "Kennedy Space Center, FL",
      description: "Supporting NASA's Space Launch System development and testing",
      achievements: [
        "Developed Bash scripts for Linux VM management, reducing setup time by 20%",
        "Applied Agile methodologies for Propulsion team unit testing",
        "Ensured 100% reliability ahead of Space Launch System updates",
        "Updated Space Launch System documentation for team onboarding",
        "Identified and fixed bugs during code reviews preventing deployment errors"
      ],
      technologies: ["Bash", "Linux", "Agile", "Unit Testing", "Documentation"]
    }
  ];