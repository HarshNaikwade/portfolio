import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import portfolioData, { Skill } from "@/data/portfolio";
import { Code, ShieldAlert, Database, Cloud, Layout } from "lucide-react";

const skillCategories = Array.from(
  new Set(portfolioData.skills.map((skill) => skill.category))
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0]);

  // Map category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="mr-2 text-blue-400" size={16} />;
      case "Backend":
        return <Code className="mr-2 text-green-400" size={16} />;
      case "Database":
        return <Database className="mr-2 text-amber-400" size={16} />;
      case "Cloud & DevOps":
        return <Cloud className="mr-2 text-purple-400" size={16} />;
      case "Testing":
        return <ShieldAlert className="mr-2 text-red-400" size={16} />;
      default:
        return <Code className="mr-2 text-primary" size={16} />;
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Tech-themed background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-foreground/80">
            My technical expertise spans across various domains.
          </p>
        </div>

        <Tabs
          defaultValue={skillCategories[0]}
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-full mx-auto"
        >
          <div className="overflow-x-auto">
            <TabsList
              className="
        flex 
        gap-2 
        mb-8 
        whitespace-nowrap 
        w-max 
        mx-auto
        px-4
      "
            >
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm flex items-center"
                >
                  {getCategoryIcon(category)}
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {skillCategories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="animate-fade-in max-h-[70vh] custom-scrollbar"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {portfolioData.skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Decorative circuit lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 h-[1px] w-1/3 bg-gradient-to-l from-primary/30 to-transparent"></div>
          <div className="absolute top-2/4 left-0 h-[1px] w-1/3 bg-gradient-to-r from-primary/30 to-transparent"></div>
          <div className="absolute bottom-1/4 right-0 h-[1px] w-1/3 bg-gradient-to-l from-primary/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  // Define color based on skill level
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Beginner":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <Card className="overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{skill.name}</h3>
          <Badge className={`${getLevelColor(skill.level)} border`}>
            {skill.level}
          </Badge>
        </div>

        <div className="mt-3 h-1 w-full bg-white/10 rounded">
          <div
            className={`h-1 rounded ${
              skill.level === "Advanced"
                ? "bg-green-500 w-full"
                : skill.level === "Intermediate"
                ? "bg-blue-500 w-2/3"
                : "bg-amber-500 w-1/3"
            } transition-all duration-1000 group-hover:opacity-80`}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
