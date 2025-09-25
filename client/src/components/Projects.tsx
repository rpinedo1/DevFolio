import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import cloudArchitectureImage from "@assets/generated_images/Cloud_architecture_project_visual_370ea6c7.png";
import monitoringDashboardImage from "@assets/generated_images/Monitoring_dashboard_project_f786b659.png";
import cicdAutomationImage from "@assets/generated_images/CI/CD_automation_project_a48b4f2f.png";

export default function Projects() {
  // todo: remove mock functionality - these are example projects for the portfolio
  const projects = [
    {
      title: "Prime Video Infrastructure Automation",
      description: "Automated infrastructure provisioning for 7+ microservices across 3 AWS regions using TypeScript CDK and Python. Eliminated manual setup processes and reduced deployment errors by over 90%.",
      image: cloudArchitectureImage,
      technologies: ["TypeScript", "AWS CDK", "Python", "Lambda", "CloudFormation", "CI/CD"],
      achievements: [
        "7+ services automated",
        "3 AWS regions coverage", 
        "90%+ error reduction",
        "Zero manual deployments"
      ],
      type: "Professional Project"
    },
    {
      title: "Real-time Telemetry Pipeline",
      description: "Developed comprehensive telemetry pipelines for real-time anomaly detection across 5 Prime Video client platforms, preventing revenue-impacting customer impressions and clicks tracking errors and supporting multi-million dollar partner payouts.",
      image: monitoringDashboardImage,
      technologies: ["Java", "Kotlin", "AWS", "CloudWatch", "SQS", "Real-time Processing"],
      achievements: [
        "5 platforms covered",
        "Real-time processing",
        "Revenue protection",
        "Multi-million $ impact"
      ],
      type: "Professional Project"
    },
    {
      title: "Push Notification Service: Cross-Team Service Architecture and Launch",
      description:
        "Architected and launched a unified push notification service for Prime Video, built with CDK and Lambda, introduced integration patterns with ACN, and led Operational Readiness to a zero‑incident production launch. Initially used for Device cache invalidation for Prime Video live events and now expanding to educational and compliance notifications.",
      image: cicdAutomationImage,
      technologies: ["TypeScript", "AWS CDK", "Kotlin", "Lambda", "API Gateway"],
      achievements: [
        "Complete service infrastructure deployed with CDK",
        "Zero customer‑facing incidents at launch",
        "99.9% availability during initial launch",
        "Reusable CDK patterns adopted by other teams"
      ],
      type: "Professional Project",
    },
  ];

  const handleProjectClick = (projectTitle: string) => {
    // Open a modal or navigate to project details
    alert(`Project: ${projectTitle}\n\nThis would normally open a detailed project page with:\n• Architecture diagrams\n• Code samples\n• Performance metrics\n• Technical deep-dive\n\nFor now, contact me to discuss this project in detail!`);
  };

  const handleGithubClick = (projectTitle: string) => {
    // These are professional projects, so redirect to contact for discussion
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // dynamic visible count based on viewport width
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === 'undefined') return Math.max(3, projects.length);
    const w = window.innerWidth;
    const approxCardWidth = 600; // px per card (approx)
    const calculated = Math.floor(w / approxCardWidth) || 1;
    return Math.min(projects.length, Math.max(3, calculated));
  });

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      const approxCardWidth = 600;
      const calculated = Math.floor(w / approxCardWidth) || 1;
      const newCount = Math.min(projects.length, Math.max(3, calculated));
      setVisibleCount(newCount);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [projects.length]);

  const displayedProjects = showAll ? projects : projects.slice(0, visibleCount);

  return (
    <section className="py-24 px-6 bg-muted/30" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-projects-subtitle">
            Showcasing impactful solutions and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="hover-elevate flex flex-col h-full" data-testid={`card-project-${index}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-project-type-${index}`}>
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="flex-none">
                <CardTitle className="text-xl leading-tight" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-none" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="mb-4 flex-none">
                  <h4 className="font-bold text-sm mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-1" data-testid={`text-project-achievement-${index}-${achIndex}`}>
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 flex-none">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs" data-testid={`badge-project-tech-${index}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button 
                    size="sm" 
                    className="flex-1 gap-2" 
                    onClick={() => handleProjectClick(project.title)}
                    data-testid={`button-project-view-${index}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleGithubClick(project.title)}
                    data-testid={`button-project-github-${index}`}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            These projects represent my professional contributions at Amazon and Intel, 
            demonstrating real-world impact and technical leadership.
          </p>
          {projects.length > visibleCount && (
            <Button
              variant="outline"
              size="lg"
              data-testid="button-view-all-projects"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}