import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(251, 248, 250, 0.9), rgba(251, 248, 250, 0.8)), url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 font-anonymous">
            {t("hero.title")}
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground mb-8 font-anonymous">
            {t("hero.subtitle")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-anonymous"
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="font-anonymous"
            >
              <Play className="mr-2 h-5 w-5" />
              {t("hero.learnMore")}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for tech aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-success rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-success rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;