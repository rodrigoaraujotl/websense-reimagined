import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Code } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t("about.mission"),
      description: t("about.missionText"),
    },
    {
      icon: <Eye className="h-8 w-8 text-success" />,
      title: t("about.vision"),
      description: t("about.visionText"),
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in cutting-edge technologies.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Innovation Focus",
      description: "We stay ahead of the curve with the latest technologies and methodologies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-anonymous">
            {t("about.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-anonymous">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;