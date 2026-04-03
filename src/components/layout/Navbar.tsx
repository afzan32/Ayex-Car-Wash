import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Droplets, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLanguage(language === 'en' ? 'ar' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.areas, href: '#areas' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.bookNow, href: '#booking' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const mobileLinks = links.filter(link => link.name !== t.nav.bookNow && link.name !== t.nav.contact);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              <Droplets size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight uppercase">AYEX CAR WASH<span className="text-primary"></span>.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleLang} className="font-semibold">
              {language === 'en' ? 'AR' : 'EN'}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <a
              href={`/AYEX_CAR_WASH_PROFILE.pdf`}
              download="AYEX_CAR_WASH_PROFILE.pdf"
              className="cursor-pointer"
            >
              <Button className="rounded-full shadow-md shadow-primary/20 gap-2">
                <Download size={16} />
                Download PDF
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {mobileLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  scrollToId('booking');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              >
                {t.hero?.bookNow || 'Book Now'}
              </button>
              <button
                type="button"
                onClick={() => {
                  scrollToId('contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
              >
                {t.hero?.contactUs || 'Contact Us'}
              </button>
              <div className="flex items-center justify-between px-3 pt-4 border-t border-border">
                <Button variant="outline" onClick={toggleLang}>
                  {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                </Button>
                <a
                  href={`/AYEX_CAR_WASH_PROFILE.pdf`}
                  download="AYEX_CAR_WASH_PROFILE.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <Button className="gap-2">
                    <Download size={16} />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
