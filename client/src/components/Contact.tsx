import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";
import { contactInfo } from "@/data/contactInfo";

export default function Contact() {

  const handleContactClick = (action: string | null, label: string) => {
    if (action) {
      if (action.startsWith('mailto:') || action.startsWith('https:')) {
        window.open(action, '_blank');
      }
    }
  };

  const handleResumeDownload = () => {
    window.open('/api/resume', '_blank');
  };

  return (
    <section className="py-24 px-6" data-testid="section-contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            I'm always interested in discussing new opportunities, technical challenges, 
            and innovative projects. Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-elevate" data-testid="card-contact-info">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors ${contact.action ? 'cursor-pointer' : ''}`}
                  onClick={() => handleContactClick(contact.action, contact.label)}
                  data-testid={`contact-item-${index}`}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid={`text-contact-label-${index}`}>
                      {contact.label}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-contact-value-${index}`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-resume-download">
            <CardHeader>
              <CardTitle className="text-2xl">Resume & Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Download my complete resume with detailed work experience, 
                technical skills, and achievements from my roles at Amazon, 
                Intel, and NASA.
              </p>
              <Button 
                size="lg" 
                className="w-full gap-2" 
                onClick={handleResumeDownload}
                data-testid="button-download-resume"
              >
                <Download className="h-5 w-5" />
                Download Resume (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20" data-testid="card-availability">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Open to New Opportunities</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Currently exploring new challenges in software engineering, 
              particularly in distributed systems, cloud architecture, and 
              high-scale applications. Interested in both full-time positions 
              and exciting contract work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open('mailto:ramiroepinedo@gmail.com', '_blank')}
                data-testid="button-contact-email"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/ramiropinedo', '_blank')}
                data-testid="button-contact-linkedin"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}