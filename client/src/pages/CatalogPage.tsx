import Navigation from '@/components/Navigation';
import Catalog from '@/components/Catalog';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Catalog />
      <Footer />
    </div>
  );
}