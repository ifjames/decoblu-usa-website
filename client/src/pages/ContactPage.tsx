import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}