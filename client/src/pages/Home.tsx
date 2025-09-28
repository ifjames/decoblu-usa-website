import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesGrid />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}