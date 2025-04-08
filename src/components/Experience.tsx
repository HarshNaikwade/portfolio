
import { Card, CardContent } from "@/components/ui/card";
import portfolioData from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Professional Experience
          </h2>
          <p className="text-foreground/80">
            My career journey and professional achievements in{" "}
            {portfolioData.title}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 max-h-[70vh] custom-scrollbar pr-2">
            {portfolioData.experience.map((job, index) => (
              <Card
                key={index}
                className={`border border-white/10 bg-secondary/30 overflow-hidden relative group transition-all hover:shadow-md hover:shadow-primary/10 hover:border-primary/20`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    {/* First Row: Job Title & Company */}
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-gradient">
                        {job.title}
                      </h3>
                      <div className="flex items-center mt-1 text-muted-foreground">
                        <Briefcase size={16} className="mr-2" />
                        <span>{job.company}</span>
                      </div>
                    </div>

                    {/* Second Row: Period & Location */}
                    <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center font-medium">
                        <Calendar size={16} className="mr-2" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {job.description.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-foreground/80 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-white/5 border-white/10 hover:border-primary/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
