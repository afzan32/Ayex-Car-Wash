import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GalleryTestimonials() {
  const { t } = useLanguage();

  // Stock images via Unsplash
  const images = [
    { url: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=600", alt: "luxury car wash exterior" },
    { url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600", alt: "car detailing interior" },
    { url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600", alt: "clean wheel rim shine" },
    { url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=600", alt: "sports car shining" }
  ];

  const testimonials = [
    { name: "Ahmed Al Mansouri", role: "Property Manager", text: "Ayex has transformed the way we manage our residential tower parking. Highly professional team.", rating: 5 },
    { name: "Sarah Johnson", role: "Corporate Fleet Manager", text: "Reliable, eco-friendly, and always on time. Their monthly reporting makes my job so much easier.", rating: 5 },
    { name: "Mohammed Al Kaabi", role: "VIP Client", text: "The waterless wash they use on my sports car is incredible. Leaves a perfect shine without scratches.", rating: 5 },
  ];

  return (
    <div className="py-16 space-y-16">
      
      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 gap-2">
          <h2 className="text-3xl font-bold mb-2">{t.gallery.title}</h2>
          <p className="text-muted-foreground">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted"
            >
              {/* unsplash car washing details */}
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-16 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-muted-foreground">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border relative"
              >
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{test.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-xl text-primary border border-border">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{test.name}</h4>
                    <p className="text-xs text-muted-foreground">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
