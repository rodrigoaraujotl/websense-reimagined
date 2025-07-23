import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, TrendingUp, ShoppingCart } from "lucide-react";

const AI = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t("ai.benefits.automation.title"),
      description: t("ai.benefits.automation.description"),
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: t("ai.benefits.insights.title"),
      description: t("ai.benefits.insights.description"),
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      title: t("ai.benefits.growth.title"),
      description: t("ai.benefits.growth.description"),
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: t("ai.benefits.ecommerce.title"),
      description: t("ai.benefits.ecommerce.description"),
    },
  ];

  return (
    <section id="ai" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Brain className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-anonymous">
              {t("ai.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("ai.subtitle")}
            </p>
          </div>

          {/* Description */}
          <div className="mb-16">
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("ai.description")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("ai.description2")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground font-anonymous">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-anonymous">
              {t("ai.services.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground font-anonymous">
                    {t("ai.services.agents.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ai.services.agents.description")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground font-anonymous">
                    {t("ai.services.consulting.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ai.services.consulting.description")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground font-anonymous">
                    {t("ai.services.ecommerce.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("ai.services.ecommerce.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="font-medium">
              {t("ai.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI;