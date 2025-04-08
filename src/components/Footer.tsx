import portfolioData from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl font-bold text-gradient">
              {portfolioData.name}
            </a>
          </div>
          <div className="text-sm text-foreground/60">
            Wow! Thanks for reading till here! Love Love ❤️
          </div>
          <div className="flex space-x-6">
            <a
              href={
                portfolioData.socialLinks
                  .map((link) => link.url)
                  .filter((url) => url.includes("linkedin"))[0]
              }
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={
                portfolioData.socialLinks
                  .map((link) => link.url)
                  .filter((url) => url.includes("github"))[0]
              }
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
