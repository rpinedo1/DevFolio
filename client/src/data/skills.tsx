import { Code, Cloud, Monitor, Zap, Shield } from "lucide-react";

export type SkillCategory = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    skills: string[]
}

export const skillCategories: SkillCategory[] = [
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
]