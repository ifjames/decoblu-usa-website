import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}