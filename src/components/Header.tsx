import { Link, useLocation } from "react-router-dom";
import { Music, Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { LanguageSelector } from "./home/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: "/", external: false },
    { name: t('nav.news'), path: "/news", external: false },
    { name: t('nav.events'), path: "/events", external: false },
    { name: t('nav.tickets'), path: "/tickets", external: false },
  ];

  const externalLinks = [
    { name: "Cheers Fest", url: "https://cheers-fest.com/" },
    { name: "Banking Expo Ethiopia", url: "https://bankingexpoethiopia.com/" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-accent/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Music className="h-8 w-8 text-accent group-hover:text-accent/80 transition-colors" />
            <span className="font-serif text-2xl font-bold text-gradient-luxury">
              End To End Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* External Links Separator */}
            <div className="h-6 w-px bg-white/20" />
            
            {/* External Company Websites */}
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 hover:text-accent transition-colors flex items-center gap-1"
              >
                {link.name}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
            
            <LanguageSelector />
            <Link to="/auth">
              <Button variant="luxury" size="sm">
                {t('nav.login')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-accent/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-white/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* External Links Section */}
              <div className="border-t border-white/10 pt-4 mt-2">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3 px-2">
                  Our Events
                </p>
                {externalLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/80 hover:text-accent transition-colors flex items-center gap-2 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
              
              <div className="flex justify-center py-2">
                <LanguageSelector />
              </div>
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="luxury" size="sm" className="w-full">
                  {t('nav.login')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
