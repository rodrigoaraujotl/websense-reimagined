import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Code, CheckCircle, TrendingUp, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import rodrigoImage from "@/assets/rodrigo-araujo.png";

const AboutPage = () => {
  const { t } = useTranslation();

  const whyChooseUs = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t("aboutPage.whyChoose.expertise.title"),
      description: t("aboutPage.whyChoose.expertise.description"),
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: t("aboutPage.whyChoose.innovation.title"),
      description: t("aboutPage.whyChoose.innovation.description"),
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      title: t("aboutPage.whyChoose.results.title"),
      description: t("aboutPage.whyChoose.results.description"),
    },
  ];

  const services = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t("aboutPage.services.analysis"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t("aboutPage.services.seo"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t("aboutPage.services.cro"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: t("aboutPage.services.ecommerce"),
    },
  ];

  return (
    <div className="min-h-screen bg-background font-anonymous">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-anonymous">
                {t("aboutPage.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("aboutPage.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-anonymous">
                {t("aboutPage.story.title")}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t("aboutPage.story.paragraph1")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("aboutPage.story.paragraph2")}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={rodrigoImage}
                      alt="Rodrigo Araujo - Founder and CEO"
                      className="rounded-lg shadow-xl max-w-md w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-anonymous">
                {t("aboutPage.mission.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("aboutPage.mission.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-anonymous">
                {t("aboutPage.whyChoose.title")}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 font-anonymous">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-anonymous">
                {t("aboutPage.servicesSection.title")}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/20">
                    {service.icon}
                    <span className="text-foreground font-medium">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-anonymous">
                {t("aboutPage.cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("aboutPage.cta.description")}
              </p>
              <p className="text-muted-foreground">
                {t("aboutPage.cta.contact")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;