import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import FloatingProposal from '@/components/layout/FloatingProposal';

import HeroStats from '@/components/sections/HeroStats';
import AboutServices from '@/components/sections/AboutServices';
import PricingContracts from '@/components/sections/PricingContracts';
import FeaturesAreas from '@/components/sections/FeaturesAreas';
import GalleryTestimonials from '@/components/sections/GalleryTestimonials';
import FAQBooking from '@/components/sections/FAQBooking';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 overflow-x-hidden">
        <HeroStats />
        <AboutServices />
        <PricingContracts />
        <FeaturesAreas />
        <GalleryTestimonials />
        <FAQBooking />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingProposal />
    </div>
  );
}
