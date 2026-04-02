import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroStats() {
  const { t, language } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  const stats = [
    { num: 500, suffix: "+", label: t.stats.vehicles },
    { num: 50, suffix: "+", label: t.stats.corporate },
    { num: 3, suffix: "+", label: t.stats.years },
    { num: 100, suffix: "%", label: t.stats.eco },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-12 lg:pt-14 pb-28">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`/images/hero-bg.png`}
          alt="Premium Car Wash Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40 dark:bg-background/55"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Abu Dhabi's #1 Choice */}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground">
              {t.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
              {t.hero.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg 
              bg-yellow-400 text-black 
              shadow-lg shadow-yellow-400/30 
              hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-400/40 
              transition-all hover:-translate-y-1"
                onClick={() =>
                  document.getElementById("booking")?.scrollIntoView()
                }
              >
                {t.hero.bookNow} <ArrowIcon className="ms-2" size={20} />
              </Button> */}
              {/* <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 hover:bg-muted transition-all"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView()
                }
              >
                {t.hero.contactUs}
              </Button> */}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-104 pb-6 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-xl shadow-black/5"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter end={stat.num} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
