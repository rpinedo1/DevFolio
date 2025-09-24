import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Monitor, Zap, Shield } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Java", "Kotlin", "Python", "TypeScript", "Bash", "C++", "C#"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["AWS Lambda", "EC2", "ECS/Fargate", "S3", "SQS", "CloudFormation", "CDK"]
    },
    {
      icon: Monitor,
      title: "Monitoring & Operations",
      skills: ["CloudWatch", "Custom Telemetry", "Incident Response", "CI/CD Automation"]
    },
    {
      icon: Zap,
      title: "Performance & Scaling",
      skills: ["Load Testing", "Distributed Systems", "Health Monitoring", "Performance Tuning"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      skills: ["Infrastructure Hardening", "CDK Enforcement", "Multi-account Auditing", "Compliance"]
    }
  ];

  return (
    <section className="py-24 px-6" data-testid="section-skills">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-skills-title">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-skills-subtitle">
            Technologies and expertise developed through years of hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-elevate h-full" data-testid={`card-skill-category-${index}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid={`text-category-title-${index}`}>
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Additional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Development Practices</h4>
              <p className="text-sm text-muted-foreground">
                Agile methodologies, code reviews, unit testing, documentation
              </p>
            </div>
            <div className="p-6 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Cross-functional collaboration, technical mentoring, project leadership
              </p>
            </div>
            <div className="p-6 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                Performance optimization, incident response, system debugging
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}