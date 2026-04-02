import { useLanguage } from '@/contexts/LanguageContext';
import { Droplets, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Droplets size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">AYEX CAR WASH<span className="text-primary">.</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.services.s1.title}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.services.s3.title}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.services.s5.title}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.services.s6.title}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.about}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#areas" className="hover:text-primary transition-colors">{t.nav.areas}</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span dir="ltr">{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{t.footer.rights}</p>
          
        </div>
      </div>
    </footer>
  );
}
