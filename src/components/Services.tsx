import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Cloud, MessageSquare, Smartphone, Brain } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Monitor className="h-10 w-10 text-primary" />,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
    },
    {
      icon: <Cloud className="h-10 w-10 text-success" />,
      title: t("services.cloud.title"),
      description: t("services.cloud.description"),
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-accent" />,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
    {
      icon: <Brain className="h-10 w-10 text-accent" />,
      title: t("services.ai.title"),
      description: t("services.ai.description"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-anonymous">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground font-anonymous">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;