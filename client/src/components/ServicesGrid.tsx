import ScrollAnimation from './ScrollAnimation';
import ProductSlideshow from './ProductSlideshow';

const products = [
  {
    title: 'Wood Grain Finishes',
    description: 'Premium wood grain vinyl patterns including luxury wood textures from our WD series collection. Perfect for cabinets, walls, and furniture.',
    images: [
      new URL('@assets/Infeel_V17_digital_catalog_page-0004.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0005.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0006.jpg', import.meta.url).href,
    ],
    productUrl: new URL('@assets/Infeel_V17_digital_catalog_1759042493296.pdf', import.meta.url).href,
  },
  {
    title: 'Metal Finishes',
    description: 'Sophisticated metal-look vinyl wraps including brushed, polished, and textured metal finishes for modern interiors.',
    images: [
      new URL('@assets/Infeel_V17_digital_catalog_page-0007.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0008.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0009.jpg', import.meta.url).href,
    ],
    productUrl: new URL('@assets/Infeel_V17_digital_catalog_1759042493296.pdf', import.meta.url).href,
  },
  {
    title: 'Stone & Marble',
    description: 'Natural stone and marble-look vinyl films for countertops, walls, and architectural elements with realistic textures.',
    images: [
      new URL('@assets/Infeel_V17_digital_catalog_page-0010.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0011.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0012.jpg', import.meta.url).href,
    ],
    productUrl: new URL('@assets/Infeel_V17_digital_catalog_1759042493296.pdf', import.meta.url).href,
  },
  {
    title: 'Fabric & Leather',
    description: 'Unique fabric and leather patterns for specialty interior design applications with authentic textures.',
    images: [
      new URL('@assets/Infeel_V17_digital_catalog_page-0013.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0014.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0015.jpg', import.meta.url).href,
    ],
    productUrl: new URL('@assets/Infeel_V17_digital_catalog_1759042493296.pdf', import.meta.url).href,
  },
  {
    title: 'Solid Colors',
    description: 'Wide range of solid color vinyl wraps for clean, modern aesthetics and bold design statements.',
    images: [
      new URL('@assets/Infeel_V17_digital_catalog_page-0016.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0017.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0018.jpg', import.meta.url).href,
    ],
    productUrl: new URL('@assets/Infeel_V17_digital_catalog_1759042493296.pdf', import.meta.url).href,
  },
  {
    title: 'Specialty Finishes',
    description: 'Innovative specialty finishes including abstract patterns, 3D textures, and custom designs for unique projects.',
    images: [
      new URL('@assets/Infeel_V17_digital_catalog_page-0019.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0020.jpg', import.meta.url).href,
      new URL('@assets/Infeel_V17_digital_catalog_page-0021.jpg', import.meta.url).href,
    ],
    productUrl: new URL('@assets/Infeel_V17_digital_catalog_1759042493296.pdf', import.meta.url).href,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Line of Products{' '}
            <span className="text-primary">INFeel</span>
          </h2>
        </ScrollAnimation>

        {/* Products Grid with Slideshows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollAnimation 
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <div 
                className="bg-card rounded-lg p-6 hover-elevate transition-all duration-300 h-full"
                data-testid={`card-product-${index}`}
              >
                <ProductSlideshow
                  images={product.images}
                  title={product.title}
                  description={product.description}
                  productUrl={product.productUrl}
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
