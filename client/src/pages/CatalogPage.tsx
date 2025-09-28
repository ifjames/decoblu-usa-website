import Navigation from '@/components/Navigation';
import Catalog from '@/components/Catalog';
import Footer from '@/components/Footer';

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Catalog />
      <Footer />
    </div>
  );
}