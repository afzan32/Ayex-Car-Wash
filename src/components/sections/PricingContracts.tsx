import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function PricingContracts() {
  const { t } = useLanguage();

  const scrollToBooking = () => document.getElementById('booking')?.scrollIntoView();

  return (
    <div className="py-12 sm:py-16 space-y-12 sm:space-y-20" id="pricing">
      
      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.pricing.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          
          {/* Silver */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{t.pricing.silver.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base h-8 sm:h-10">{t.pricing.silver.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="text-3xl sm:text-4xl font-bold border-b border-border pb-4 sm:pb-6">{t.pricing.silver.price}</div>
                <ul className="space-y-3 sm:space-y-4 pt-2">
                  {t.pricing.silver.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                      <Check size={18} sm:size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" onClick={scrollToBooking}>{t.pricing.requestQuote}</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Gold (Popular) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="border-primary shadow-xl shadow-primary/10 relative transform sm:-translate-y-4">
              <div className="absolute -top-3 sm:-top-4 inset-x-0 flex justify-center">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 sm:px-4 py-1 rounded-full uppercase tracking-wider">
                  {t.pricing.popular}
                </span>
              </div>
              <CardHeader className="pt-6 sm:pt-8">
                <CardTitle className="text-xl sm:text-2xl text-primary">{t.pricing.gold.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base h-8 sm:h-10">{t.pricing.gold.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="text-3xl sm:text-4xl font-bold border-b border-border pb-4 sm:pb-6">{t.pricing.gold.price}</div>
                <ul className="space-y-3 sm:space-y-4 pt-2">
                  {t.pricing.gold.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check size={18} sm:size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-sm sm:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={scrollToBooking}>{t.pricing.requestQuote}</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Platinum */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="border-border/50 shadow-lg bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{t.pricing.platinum.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base h-8 sm:h-10">{t.pricing.platinum.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="text-3xl sm:text-4xl font-bold border-b border-border pb-4 sm:pb-6">{t.pricing.platinum.price}</div>
                <ul className="space-y-3 sm:space-y-4 pt-2">
                  {t.pricing.platinum.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                      <Check size={18} sm:size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" onClick={scrollToBooking}>{t.pricing.requestQuote}</Button>
              </CardFooter>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* Contract Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contract">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12 lg:p-16 border border-primary/20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{t.contract.title}</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
              {t.contract.desc}
            </p>
            <Button size="lg" className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" onClick={scrollToBooking}>
              {t.contract.cta}
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
