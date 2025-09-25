import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export type ContactInfo = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    label: string,
    value: string,
    action: string | null
}

export const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "ramiroepinedo@gmail.com",
      action: "mailto:ramiroepinedo@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ramiropinedo",
      action: "https://linkedin.com/in/ramiropinedo"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rpinedo1",
      action: "https://github.com/rpinedo1"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Miramar, FL 33027",
      action: null
    }
]