import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "@/data/portfolio";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-grid"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit pattern elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-40 right-10 w-48 h-48 border border-primary/10 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 border border-primary/20 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Code snippets */}
        <div className="absolute top-1/3 left-5 text-[0.6rem] font-mono text-primary/20 transform -rotate-12">
          {`function init() {`}
          <br />
          {`  const data = [];`}
          <br />
          {`  return data;`}
          <br />
          {`}`}
        </div>
        <div className="absolute bottom-1/3 right-5 text-[0.6rem] font-mono text-primary/20 transform rotate-12">
          {`const app = {`}
          <br />
          {`  start() {},`}
          <br />
          {`  config: {}`}
          <br />
          {`}`}
        </div>
      </div>

      {/* Gradient Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-[120px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <div className="space-y-3 animate-fade-in">
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mt-2">
              {portfolioData.title}
            </p>
            <p className="text-muted-foreground mt-1">
              Based in {portfolioData.location}
            </p>
          </div>

          <div className="prose prose-invert max-w-2xl opacity-90 animate-fade-in [animation-delay:200ms]">
            <p className="leading-relaxed text-lg">{portfolioData.bio}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in [animation-delay:400ms]">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              <a href="#about" className="flex items-center gap-2">
                Learn More <ArrowDown size={16} />
              </a>
            </Button>
          </div>

          <div className="flex gap-5 mt-6 animate-fade-in [animation-delay:600ms]">
            <a
              href={
                portfolioData.socialLinks
                  .map((link) => link.url)
                  .filter((url) => url.includes("linkedin"))[0]
              }
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={
                portfolioData.socialLinks
                  .map((link) => link.url)
                  .filter((url) => url.includes("github"))[0]
              }
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <Github size={22} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-foreground/70 hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="mt-20 absolute left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <a
            href="#about"
            className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
