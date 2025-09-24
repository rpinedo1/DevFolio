import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Amazon",
      role: "Software Development Engineer II",
      period: "February 2022 – Present",
      location: "Remote",
      description: "Engineering large-scale distributed systems for Prime Video's global streaming platform",
      achievements: [
        "Engineered systems supporting 220M+ customers with sub-second latency requirements",
        "Built monitoring frameworks improving incident detection by 40%",
        "Automated infrastructure for 50+ services across 3 AWS regions using TypeScript CDK",
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

  return (
    <section className="py-24 px-6 bg-muted/30" data-testid="section-experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-experience-title">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-experience-subtitle">
            Building scalable systems and driving innovation across industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-experience-${index}`}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2" data-testid={`text-role-${index}`}>
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Building className="h-4 w-4" />
                      <span data-testid={`text-company-${index}`}>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span data-testid={`text-period-${index}`}>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span data-testid={`text-location-${index}`}>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground" data-testid={`text-description-${index}`}>
                  {exp.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2" data-testid={`text-achievement-${index}-${achIndex}`}>
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" data-testid={`badge-tech-${index}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}