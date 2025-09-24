import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import heroImage from "@assets/headshot.jpg";

export default function Hero() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="secondary" className="mb-4" data-testid="badge-status">
              Available for opportunities
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground" data-testid="text-name">
              Ramiro E. Pinedo
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium" data-testid="text-title">
              Software Development Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl" data-testid="text-summary">
              7+ years of experience building scalable distributed systems at Amazon and Intel. 
              Specialized in cloud architecture, performance optimization, and delivering solutions 
              for 220M+ global users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gap-2" 
                data-testid="button-contact"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Mail className="h-5 w-5" />
                Get in touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2" 
                data-testid="button-resume"
                onClick={() => {
                  window.open('/api/resume', '_blank');
                }}
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <Button 
                variant="ghost" 
                size="icon" 
                data-testid="link-linkedin"
                onClick={() => window.open('https://linkedin.com/in/ramiropinedo', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                data-testid="link-github"
                onClick={() => window.open('https://github.com/rpinedo1', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={heroImage}
                alt="Ramiro E. Pinedo"
                className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-background"
                data-testid="img-profile"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}