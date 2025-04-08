
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import portfolioData from "@/data/portfolio";
import { ExternalLink, Eye, Code, Server, Lock, Shield } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Tech-themed background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Binary code background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 text-xs text-primary font-mono whitespace-nowrap">
          {Array(20).fill("010101100101010110101001010101").join("")}
        </div>
        <div className="absolute bottom-0 right-0 text-xs text-primary font-mono whitespace-nowrap">
          {Array(20).fill("110101010011010100101010110").join("")}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-foreground/80">
            A selection of my most impactful projects showcasing my technical
            capabilities and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[80vh] custom-scrollbar pb-4">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);

  const gradients = [
    "from-[#8B5CF6] to-[#6366F1]",
    "from-[#2DD4BF] to-[#0EA5E9]",
    "from-[#F472B6] to-[#9F7AEA]",
    "from-[#FB7185] to-[#F43F5E]",
  ];

  const gradient = gradients[index % gradients.length];

  // Default fallback image for all projects
  const getPreviewImage = () => {
    return project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80";
  };

  return (
    <>
      <Card className="bg-white/5 border border-white/10 overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
        <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>

        <CardContent className="p-6 flex-grow">
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <p className="text-foreground/70 mb-6">{project.description}</p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex flex-col items-start">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill: string) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-white/5 border-white/10 hover:border-primary/50"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/5 border-white/10"
              onClick={() => setShowDetails(true)}
            >
              <Eye size={16} className="mr-2" />
              View Details
            </Button>

            {project.link && (
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10"
                onClick={() => window.open(project.link, "_blank")}
              >
                <ExternalLink size={16} className="mr-2" />
                Visit Project
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="bg-background border border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Project Preview Image */}
          <div className="mt-2 mb-4 overflow-hidden rounded-md border border-white/10">
            <img
              src={getPreviewImage()}
              alt={`${project.title} preview`}
              className="w-full h-48 object-cover object-center"
            />
          </div>

          <DialogDescription className="text-foreground/80 max-h-[60vh] custom-scrollbar pr-2">
            {project.detailedDescription || project.description}

            <div className="mt-4">
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill: string) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-white/5 border-white/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>User-friendly interface with intuitive navigation</li>
                <li>Secure data handling and privacy controls</li>
                <li>Responsive design for all device sizes</li>
                <li>Performance optimized for smooth experience</li>
              </ul>
            </div>

            {project.link && (
              <Button
                variant="default"
                size="sm"
                className="mt-6"
                onClick={() => window.open(project.link, "_blank")}
              >
                <ExternalLink size={16} className="mr-2" />
                Visit Project
              </Button>
            )}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
