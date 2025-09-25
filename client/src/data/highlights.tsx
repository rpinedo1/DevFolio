import { Users, Award, Code, Zap } from "lucide-react";


export type Highlight = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    description: string
}

export const highlights: Highlight[] = [
    {
      icon: Users,
      title: "220M+ Users Served",
      description: "Built systems serving Prime Video's global user base"
    },
    {
      icon: Award,
      title: "40% Faster Detection",
      description: "Improved incident detection through monitoring frameworks"
    },
    {
      icon: Code,
      title: "90% Error Reduction",
      description: "Eliminated deployment errors through automation"
    },
    {
      icon: Zap,
      title: "35 Min Time Savings",
      description: "Reduced build times for 1,000+ daily builds"
    }
];