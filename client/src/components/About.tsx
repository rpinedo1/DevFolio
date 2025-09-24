import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Code, Zap } from "lucide-react";

export default function About() {
  const highlights = [
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

  return (
    <section className="py-24 px-6" data-testid="section-about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-description">
            I'm a passionate Software Development Engineer with over 7 years of experience 
            building large-scale distributed systems. At Amazon, I've engineered solutions 
            that serve hundreds of millions of users while maintaining sub-second latency 
            requirements. My expertise spans cloud architecture, performance optimization, 
            and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-highlight-${index}`}>
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2" data-testid={`text-highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-highlight-desc-${index}`}>
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Customer Obsession",
              "Operational Excellence", 
              "Performance Optimization",
              "Team Collaboration",
              "Continuous Learning",
              "Innovation"
            ].map((value, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2" data-testid={`badge-value-${index}`}>
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}