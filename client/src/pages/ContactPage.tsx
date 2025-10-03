import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollToTopPrompt from '@/components/ScrollToTopPrompt';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Contact />
      <Footer />
      <ScrollToTopPrompt threshold={150} />
    </div>
  );
}