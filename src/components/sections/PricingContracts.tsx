import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function PricingContracts() {
  const { t } = useLanguage();

  const scrollToBooking = () => document.getElementById('booking')?.scrollIntoView();

  return (
    <div className="py-16 space-y-20" id="pricing">
      
      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Silver */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t.pricing.silver.name}</CardTitle>
                <CardDescription className="text-base h-10">{t.pricing.silver.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold border-b border-border pb-6">{t.pricing.silver.price}</div>
                <ul className="space-y-4 pt-2">
                  {t.pricing.silver.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Check size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
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
            <Card className="border-primary shadow-xl shadow-primary/10 relative transform md:-translate-y-4">
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  {t.pricing.popular}
                </span>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-primary">{t.pricing.gold.name}</CardTitle>
                <CardDescription className="text-base h-10">{t.pricing.gold.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold border-b border-border pb-6">{t.pricing.gold.price}</div>
                <ul className="space-y-4 pt-2">
                  {t.pricing.gold.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="font-medium">{f}</span>
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
                <CardTitle className="text-2xl">{t.pricing.platinum.name}</CardTitle>
                <CardDescription className="text-base h-10">{t.pricing.platinum.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold border-b border-border pb-6">{t.pricing.platinum.price}</div>
                <ul className="space-y-4 pt-2">
                  {t.pricing.platinum.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Check size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
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

    </div>
  );
}
