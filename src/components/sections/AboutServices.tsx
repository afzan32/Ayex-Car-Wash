import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Droplet, CarFront, Sparkles, Zap, Briefcase, CalendarDays, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AboutServices() {
  const { t } = useLanguage();

  const services = [
    { icon: Droplet, title: t.services.s1.title, desc: t.services.s1.desc },
    { icon: CarFront, title: t.services.s2.title, desc: t.services.s2.desc },
    { icon: Sparkles, title: t.services.s3.title, desc: t.services.s3.desc },
    { icon: Zap, title: t.services.s4.title, desc: t.services.s4.desc },
    { icon: Briefcase, title: t.services.s5.title, desc: t.services.s5.desc },
    { icon: CalendarDays, title: t.services.s6.title, desc: t.services.s6.desc },
  ];

  return (
    <div className="py-16 space-y-20" id="about">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Badge variant="outline" className="px-3 py-1 text-sm border-primary/30 text-primary bg-primary/5">
              {t.about.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.desc1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.desc2}
            </p>
            
            <ul className="space-y-4 pt-4">
              {t.about.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ShieldCheck size={14} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl z-0"></div>
            <img 
              src={`${import.meta.env.BASE_URL}images/about-img.png`} 
              alt="Ayex Detailing" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-border/50 object-cover aspect-[4/3]"
            />
            
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -start-6 z-20 bg-card border border-border p-6 rounded-xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-muted flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm font-bold">{t.testimonials.subtitle}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-16 border-y border-border/50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
