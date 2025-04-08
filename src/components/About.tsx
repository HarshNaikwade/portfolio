import { Card, CardContent } from "@/components/ui/card";
import portfolioData from "@/data/portfolio";

const About = () => {
  // Extract relevant data from portfolioData
  const { about } = portfolioData;

  // Create cards based on skill categories
  const aboutCards = [
    {
      title: "Full-Stack Development",
      description:
        "Skilled in developing end-to-end applications using ReactJS, Python, and NodeJS frameworks.",
      gradient: "from-[#8B5CF6] to-[#6366F1]",
    },
    {
      title: "QA & Automation",
      description:
        "Expert in automation testing and quality assurance, reducing manual efforts and improving product stability.",
      gradient: "from-[#2DD4BF] to-[#0EA5E9]",
    },
    {
      title: "Cloud Platforms",
      description:
        "Proficient with AWS and Azure, along with Docker and CI/CD tools for streamlined deployments.",
      gradient: "from-[#F472B6] to-[#9F7AEA]",
    },
    {
      title: "Cybersecurity",
      description:
        "Knowledgeable in ethical hacking and cybersecurity practices to secure networks and systems.",
      gradient: "from-[#FB7185] to-[#F43F5E]",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              About Me
            </h2>

            <div className="space-y-4 text-foreground/90">
              {about.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutCards.map((card, index) => (
              <AboutCard
                key={index}
                title={card.title}
                description={card.description}
                gradient={card.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({
  title,
  description,
  gradient,
}: {
  title: string;
  description: string;
  gradient: string;
}) => {
  return (
    <Card className="bg-secondary/30 border-0 overflow-hidden relative group hover:scale-[1.02] transition-transform">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
      ></div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default About;
