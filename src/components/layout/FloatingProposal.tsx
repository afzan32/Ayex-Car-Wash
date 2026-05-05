import { FileText } from 'lucide-react';

export default function FloatingProposal() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToBooking}
      className="fixed bottom-6 left-6 z-50
      w-28 h-28 sm:w-32 sm:h-32
      bg-yellow-400 text-black
      rounded-full
      shadow-lg hover:shadow-xl
      transition-all duration-300 hover:scale-105
      flex flex-col items-center justify-center text-center
      p-3 animate-pulse hover:animate-none"
      aria-label="Get Proposal"
    >
      <FileText size={18} className="mb-1" />
      <span className="text-[10px] sm:text-xs leading-tight font-semibold">
        Corporate & Residential Annual Contracts
      </span>
    </button>
  );
}