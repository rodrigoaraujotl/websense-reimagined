import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      key: "ecommerce",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&h=300",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      key: "healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&h=300",
      gradient: "from-green-500 to-teal-600",
    },
    {
      key: "fintech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300",
      gradient: "from-orange-500 to-red-600",
    },
    {
      key: "ai",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&h=300",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-anonymous">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`portfolio.projects.${project.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground font-anonymous">
                  {t(`portfolio.projects.${project.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(`portfolio.projects.${project.key}.description`)}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2 font-anonymous">
                    {t("portfolio.technologies")}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(t(`portfolio.projects.${project.key}.technologies`, { returnObjects: true }) as string[]).map((tech: string, techIndex: number) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="font-anonymous">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("portfolio.viewProject")}
                  </Button>
                  <Button variant="ghost" size="sm" className="font-anonymous">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;