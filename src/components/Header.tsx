import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/4.png";
import logo2 from "@/assets/9.png"
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate("/about");
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/"><img src={theme === "light" ? logo : logo2} alt="WebSense Logo" className="w-28 h-auto" /></a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-anonymous"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={handleAboutClick}
              className="text-foreground hover:text-primary transition-colors font-anonymous"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-anonymous"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors font-anonymous"
            >
              {t("nav.portfolio")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-anonymous"
            >
              {t("nav.contact")}
            </button>
          </nav>

          {/* Theme Toggle and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {i18n.language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("pt")}>
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("es")}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-anonymous"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={handleAboutClick}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-anonymous"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-anonymous"
              >
                {t("nav.services")}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-anonymous"
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-anonymous"
              >
                {t("nav.contact")}
              </button>
              <div className="px-3 py-2 flex space-x-2">
                <ThemeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Globe className="h-4 w-4 mr-2" />
                      {i18n.language.toUpperCase()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => changeLanguage("en")}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("pt")}>
                      Português
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("es")}>
                      Español
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;