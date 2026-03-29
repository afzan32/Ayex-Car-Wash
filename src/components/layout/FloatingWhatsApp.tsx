import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971569125329"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}
