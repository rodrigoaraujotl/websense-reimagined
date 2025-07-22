import { useTranslation } from "react-i18next";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-anonymous text-primary">
              WebSense
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              {t("footer.tagline")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-background/60 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-anonymous">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-primary transition-colors">
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-anonymous">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-background/80">{t("services.webDev.title")}</span>
              </li>
              <li>
                <span className="text-background/80">{t("services.cloud.title")}</span>
              </li>
              <li>
                <span className="text-background/80">{t("services.consulting.title")}</span>
              </li>
              <li>
                <span className="text-background/80">{t("services.mobile.title")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 font-anonymous">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;