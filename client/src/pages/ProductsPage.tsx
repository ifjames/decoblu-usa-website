import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollToTopPrompt from '@/components/ScrollToTopPrompt';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Products />
      <Footer />
      <ScrollToTopPrompt threshold={150} />
    </div>
  );
}