import { Download, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';
import ScrollAnimation from './ScrollAnimation';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import infeelLogo from '@assets/image_1759301171336.png';
import decobluFlooringLogo from '@assets/image_1759301420207.png';
import decobluWindowLogo from '@assets/image_1759301424430.png';
import povWindowLogo from '@assets/image_1759301437669.png';
import catalogPdf from '@assets/Infeel_V17_digital_catalog_1759042493296.pdf';

import product1_1 from '@assets/product1/1.jpg';
import product1_2 from '@assets/product1/2.jpg';

import product2_a from '@assets/product2/a.jpg';
import product2_b from '@assets/product2/b.jpg';
import product2_c from '@assets/product2/c.jpg';

import product3_aa from '@assets/product3/aa.jpg';
import product3_bb from '@assets/product3/bb.jpg';
import product3_cc from '@assets/product3/cc.jpg';
import product3_dd from '@assets/product3/dd.jpg';

import product4_aaa from '@assets/product4/aaa.jpg';
import product4_bbb from '@assets/product4/bbb.jpg';
import product4_ccc from '@assets/product4/ccc.jpg';

const products = [
  {
    id: 1,
    name: 'INFeel Architectural Finish Films',
    logo: infeelLogo,
    images: [product1_1, product1_2],
    description: 'INFEEL is a self-adhesive, thermo-formable and multi-purpose surface finish vinyl film which can be easily installed on walls, columns, ceilings, doors, moldings and any interior fixtures. INFEEL can be widely applied for commercial uses such as restaurants, hotels, hospitals, department stores, retails stores, auditoriums, airports, government offices and a lot more. INFEEL can also be widely applied for residential uses, such as living rooms, bathrooms, kitchen areas, bedrooms, and more.',
    features: [
      'Fire retardant and flame resistance treatments',
      'Abrasion resistance and dimensional stability',
      'Heat, damp, and cold temperature resistance',
      'Stain resistant with easy maintenance',
      '345 patterns with various colors and designs',
      'Certified worldwide'
    ],
    benefits: 'It lowers the project costs and maintenance costs. INFEEL has fire retardant and flame resistance treatments and it is certified worldwide. INFEEL has abrasion resistance, dimensional stability, heat resistance, damp resistance, cold temperature resistance and stain resistance.',
    catalogUrl: catalogPdf
  },
  {
    id: 2,
    name: 'DecoBlu Luxury Vinyl Flooring',
    logo: decobluFlooringLogo,
    images: [product2_a, product2_b, product2_c],
    description: 'DECOBLU vinyl flooring is innovative, high-performing and durable product that is produced and sold in plank and tile format. DECOBLU vinyl flooring is available in glue down type, click type and loose lay type. DECOBLU vinyl flooring has 120 designs, colors and patterns which can meet various needs and demand.',
    features: [
      'Available in plank and tile format',
      'Glue down, click, and loose lay types',
      '120 designs, colors and patterns',
      'Mimics real woods, stones, granites, fabrics, and marbles',
      'High-performing and durable',
      'Cost-effective flooring solution'
    ],
    benefits: 'DECOBLU vinyl flooring brings out the richness and texture of expensive natural materials, such as real woods, abstracts, carpets, stones, granites, fabrics and marbles with the most advanced printing technology.',
    catalogUrl: undefined
  },
  {
    id: 3,
    name: 'DecoBlu Window Films',
    logo: decobluWindowLogo,
    images: [product3_aa, product3_bb, product3_cc, product3_dd],
    description: 'DECOBLU INC. provides competitive solar optical window films with advanced technology. DECOBLU INC. offers high-quality automotive window films, architectural window films for both commercial and residential uses, safety films, security films and anti-graffiti films.',
    features: [
      'Automotive Films - Reduce heat and control UV rays by 99%',
      'Architectural Films - Energy efficient with IR rejection',
      'Safety & Security Films - Glass fragment protection',
      'Anti-Graffiti Films - Easy removal and replacement',
      'Super optical clarity with no yellowing',
      'No delaminating, rainbow, or orange peel'
    ],
    benefits: 'DECOBLU films reduce heat, protect from harmful UV rays, enhance privacy, improve safety, and provide cost-effective solutions for both automotive and architectural applications.',
    catalogUrl: undefined
  },
  {
    id: 4,
    name: 'POV Window Films',
    logo: povWindowLogo,
    images: [product4_aaa, product4_bbb, product4_ccc],
    description: 'POV window films are designed and created exclusively to be applied on glass surfaces. These shatter-proof decorative films can be used to control light and reject 98% of the UV rays. Specially printed POV films protect privacy of the residential houses and also the commercial areas such as offices, stores and common areas.',
    features: [
      'Shatter-proof decorative films',
      'Controls light and rejects 98% UV rays',
      'Privacy protection for residential and commercial',
      'Functions as safety film',
      'Special adhesive technology',
      'Exclusively for glass surfaces'
    ],
    benefits: 'POV is made of the same special adhesive and film that are used for safety films and therefore it functions similarly to the safety film in the event of glass breakage.',
    catalogUrl: undefined
  }
];

function ProductCarousel({ images, productId }: { images: string[], productId: number }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const intervalId = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(intervalId);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="flex-[0_0_100%] min-w-0 relative"
            >
              <div className="relative aspect-[16/9] bg-transparent border border-foreground/10">
                <img
                  src={image}
                  alt={`Product ${productId} - Slide ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700"
                  data-testid={`img-product-${productId}-${idx}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 text-foreground p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hover:bg-white dark:hover:bg-black z-10"
        data-testid={`button-prev-${productId}`}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 text-foreground p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hover:bg-white dark:hover:bg-black z-10"
        data-testid={`button-next-${productId}`}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === selectedIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            data-testid={`dot-${productId}-${idx}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const [, setLocation] = useLocation();
  
  const handleDownloadCatalog = (catalogUrl: string, productName: string) => {
    const link = document.createElement('a');
    link.href = catalogUrl;
    link.download = `${productName.replace(/\s+/g, '_')}_Catalog.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollAnimation direction="up">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-products-title">
              Our Product Lines
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-products-subtitle">
              Explore our comprehensive collection of premium architectural films, flooring, and window solutions for interior and exterior applications.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Product Lines */}
      <div className="space-y-12">
        {products.map((product, index) => (
          <ScrollAnimation key={product.id} direction={index % 2 === 0 ? 'left' : 'right'}>
            <div className="py-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="border border-primary/10 shadow-lg overflow-hidden bg-white dark:bg-background">
                  <CardContent className="p-8 md:p-12 lg:p-16">
                    {/* Logo Section at Top */}
                    <div className="text-center mb-8">
                      <div className="inline-block p-4 md:p-6 bg-transparent mb-4">
                        <img 
                          src={product.logo} 
                          alt={`${product.name} logo`}
                          className="h-20 md:h-24 lg:h-28 w-auto mx-auto drop-shadow-sm"
                          data-testid={`img-logo-${product.id}`}
                        />
                      </div>
                      <div className="mx-auto mb-6 h-px w-16 bg-primary/30"></div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid={`text-product-name-${product.id}`}>
                        {product.name}
                      </h2>
                    </div>

                    {/* Product Carousel */}
                    <div className="mb-10">
                      <ProductCarousel images={product.images} productId={product.id} />
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed text-center max-w-4xl mx-auto" data-testid={`text-description-${product.id}`}>
                      {product.description}
                    </p>

                    {/* Features & Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div className="bg-primary/3 p-6 rounded-xl border border-primary/10">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <div className="h-1 w-8 bg-primary rounded-full"></div>
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm md:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="bg-primary/3 p-6 rounded-xl border border-primary/10 flex flex-col">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <div className="h-1 w-8 bg-primary rounded-full"></div>
                          Benefits
                        </h3>
                        <p className="text-sm md:text-base text-foreground/80 flex-grow" data-testid={`text-benefits-${product.id}`}>
                          {product.benefits}
                        </p>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="text-center">
                      <Button 
                        size="lg"
                        onClick={() => handleDownloadCatalog(product.catalogUrl || catalogPdf, product.name)}
                        className="bg-primary text-primary-foreground hover-elevate active-elevate-2 px-8 py-6 text-lg"
                        data-testid={`button-download-catalog-${product.id}`}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Catalog
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <ScrollAnimation direction="up">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our expert team is ready to help you choose the perfect solution for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setLocation('/contact')}
                  className="bg-primary text-primary-foreground hover-elevate active-elevate-2 px-8 py-6 text-lg"
                  data-testid="button-contact-cta"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => handleDownloadCatalog(catalogPdf, 'Infeel_V17')}
                  className="hover-elevate active-elevate-2 px-8 py-6 text-lg border-2"
                  data-testid="button-download-cta"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
}
