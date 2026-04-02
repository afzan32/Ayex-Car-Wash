import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// EmailJS Configuration - Values from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal('')),
  serviceType: z.string().min(1, "Service selection required"),
  date: z.string().min(1, "Date required"),
  vehicles: z.coerce.number().min(1, "At least 1 vehicle"),
  location: z.string().min(5, "Location required"),
  notes: z.string().optional()
});

export default function FAQBooking() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isPending, setIsPending] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const faqs = [
    { q: t.faq.q1.q, a: t.faq.q1.a },
    { q: t.faq.q2.q, a: t.faq.q2.a },
    { q: t.faq.q3.q, a: t.faq.q3.a },
    { q: t.faq.q4.q, a: t.faq.q4.a },
  ];

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "", phone: "", email: "", serviceType: "", date: "", vehicles: 1, location: "", notes: ""
    }
  });

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = async (data: z.infer<typeof bookingSchema>) => {
    setIsPending(true);
    try {
      // Prepare email template parameters
      const templateParams = {
        to_name: 'AYEX Car Wash Team', // Who the email is addressed to
        from_name: data.fullName,
        // from_email: data.email || 'Not provided',
        phone: data.phone,
        service_type: data.serviceType,
        date: new Date(data.date).toLocaleString(),
        vehicles: data.vehicles.toString(),
        location: data.location,
        notes: data.notes || 'No additional notes',
        booking_details: `
Customer: ${data.fullName}
Phone: ${data.phone}
Service: ${data.serviceType}
Date: ${new Date(data.date).toLocaleString()}
Vehicles: ${data.vehicles}
Location: ${data.location}
Notes: ${data.notes || 'No additional notes'}
        `.trim()
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: t.booking.success,
        description: t.booking.successDesc,
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Booking Submitted",
        description: "Your booking has been submitted, but there was an issue sending the confirmation email. Please contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
      
      {/* FAQ */}
      <div className="lg:w-5/12" id="faq">
        <h2 className="text-3xl font-bold mb-4">{t.faq.title}</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl transition-colors duration-200 ${openFaq === idx ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex items-center justify-between w-full p-5 text-start font-semibold focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-5 pt-0 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="lg:w-7/12" id="booking">
        <div className="bg-card border border-border shadow-2xl rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-2 relative z-10">{t.booking.title}</h2>
          <p className="text-muted-foreground mb-8 relative z-10">{t.booking.subtitle}</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem><FormLabel>{t.booking.name}</FormLabel><FormControl><Input {...field} className="bg-background" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>{t.booking.phone}</FormLabel><FormControl><Input type="tel" dir="ltr" className="text-start bg-background" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="serviceType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.booking.service}</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="silver">Silver - Basic Wash</option>
                        <option value="gold">Gold - Standard Detail</option>
                        <option value="platinum">Platinum - Premium Detail</option>
                        <option value="corporate">Corporate Contract</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem><FormLabel>{t.booking.date}</FormLabel><FormControl><Input type="datetime-local" className="bg-background" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="vehicles" render={({ field }) => (
                  <FormItem><FormLabel>{t.booking.vehicles}</FormLabel><FormControl><Input type="number" min="1" className="bg-background" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="location" render={({ field }) => (
                  <FormItem><FormLabel>{t.booking.location}</FormLabel><FormControl><Input placeholder="Building Name, Street, Area" className="bg-background" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={form.control} name="notes" render={({ field }) => (
                <FormItem><FormLabel>{t.booking.notes}</FormLabel><FormControl><Textarea rows={3} className="bg-background resize-none" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" size="lg" className="flex-1 text-lg py-6 rounded-xl" disabled={isPending}>
                  {isPending ? "Processing..." : t.booking.submit}
                </Button>
                {/* <Button 
                  type="button" 
                  variant="secondary" 
                  size="lg" 
                  className="rounded-xl"
                  onClick={() => form.setValue("serviceType", "corporate")}
                >
                  {t.booking.fleetBtn}
                </Button> */}
              </div>
            </form>
          </Form>
        </div>
      </div>

    </div>
  );
}
