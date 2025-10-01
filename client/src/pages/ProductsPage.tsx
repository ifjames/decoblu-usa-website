import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Products />
      <Footer />
    </div>
  );
}