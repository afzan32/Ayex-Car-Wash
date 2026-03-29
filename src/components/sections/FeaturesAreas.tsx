import { useLanguage } from "@/contexts/LanguageContext";
import {
  MapPin,
  Shield,
  Leaf,
  Clock,
  Settings,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesAreas() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, text: t.features.f1 },
    { icon: Leaf, text: t.features.f2 },
    { icon: Settings, text: t.features.f3 },
    { icon: Clock, text: t.features.f4 },
    { icon: FileCheck, text: t.features.f5 },
    { icon: CheckCircle2, text: t.features.f6 },
  ];

  return (
    <div className="py-16 space-y-16 bg-muted/20" id="areas">
      {/* Coverage Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">{t.areas.title}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t.areas.subtitle}
            </p>

            {/* Embedded abstract map placeholder */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-border shadow-inner bg-card flex items-center justify-center">
              {/* Decorative map styling */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
              <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full p-4 opacity-10">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="bg-foreground rounded-sm"></div>
                ))}
              </div>
              <MapPin className="text-primary relative z-10 w-16 h-16 animate-bounce" />
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {t.areas.list.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card p-4 rounded-xl border border-border flex items-center gap-3 hover:border-primary/50 transition-colors"
              >
                <MapPin size={18} className="text-primary shrink-0" />
                <span className="font-medium text-sm md:text-base">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-lg text-muted-foreground">{t.features.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 
                          bg-yellow-400 text-black 
                            rounded-2xl shadow-lg shadow-yellow-400/20 
                            border border-yellow-500/30"
              >
                <div
                  className="w-12 h-12 rounded-full 
                          bg-black/10 flex items-center justify-center 
                          text-black mb-4"
                >
                  <Icon size={24} />
                </div>
                <span className="font-semibold text-sm">{feature.text}</span>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
