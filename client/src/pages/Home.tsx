import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import LineOfProductsSlideshow from '@/components/LineOfProductsSlideshow';
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
      <LineOfProductsSlideshow />
      <Products />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}