import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';
import ScrollAnimation from './ScrollAnimation';
import infeelLogo from '@assets/image_1759301171336.png';
import decobluFlooringLogo from '@assets/image_1759301420207.png';
import decobluWindowLogo from '@assets/image_1759301424430.png';
import povWindowLogo from '@assets/image_1759301437669.png';
import catalogPdf from '@assets/Infeel_V17_digital_catalog_1759042493296.pdf';

const products = [
  {
    id: 1,
    name: 'INFeel Architectural Finish Films',
    logo: infeelLogo,
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
    bgColor: 'from-orange-50 to-white dark:from-orange-950/20 dark:to-background',
    catalogUrl: catalogPdf
  },
  {
    id: 2,
    name: 'DecoBlu Luxury Vinyl Flooring',
    logo: decobluFlooringLogo,
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
    bgColor: 'from-cyan-50 to-white dark:from-cyan-950/20 dark:to-background',
    catalogUrl: undefined
  },
  {
    id: 3,
    name: 'DecoBlu Window Films',
    logo: decobluWindowLogo,
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
    bgColor: 'from-blue-50 to-white dark:from-blue-950/20 dark:to-background',
    catalogUrl: undefined
  },
  {
    id: 4,
    name: 'POV Window Films',
    logo: povWindowLogo,
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
    bgColor: 'from-red-50 to-white dark:from-red-950/20 dark:to-background',
    catalogUrl: undefined
  }
];

export default function Products() {
  const [, setLocation] = useLocation();
  
  const handleDownloadCatalog = (catalogUrl: string, productName: string) => {
    const link = document.createElement('a');
    link.href = catalogUrl;
    link.download = `${productName.replace(/\s+/g, '_')}_Catalog.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen py-20">
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
      <div className="space-y-0">
        {products.map((product, index) => (
          <ScrollAnimation key={product.id} direction={index % 2 === 0 ? 'left' : 'right'}>
            <div className={`bg-gradient-to-r ${product.bgColor} py-16 md:py-24`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 dark:bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0 items-center">
                      {/* Logo Section */}
                      <div className={`p-8 md:p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-background/50 to-background/80 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="text-center w-full">
                          <img 
                            src={product.logo} 
                            alt={`${product.name} logo`}
                            className="h-24 md:h-32 lg:h-40 w-auto mx-auto mb-6"
                            data-testid={`img-logo-${product.id}`}
                          />
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid={`text-product-name-${product.id}`}>
                            {product.name}
                          </h2>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className={`p-8 md:p-12 lg:p-16 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`text-description-${product.id}`}>
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-foreground mb-3">Key Features:</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-muted-foreground">
                                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-6">
                          <p className="text-sm md:text-base text-foreground/80" data-testid={`text-benefits-${product.id}`}>
                            {product.benefits}
                          </p>
                        </div>

                        {/* Download Button */}
                        <Button 
                          size="lg"
                          onClick={() => handleDownloadCatalog(product.catalogUrl || catalogPdf, product.name)}
                          className="bg-primary text-primary-foreground hover-elevate active-elevate-2 w-full md:w-auto"
                          data-testid={`button-download-catalog-${product.id}`}
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download Catalog
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <ScrollAnimation direction="up">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our expert team is ready to help you choose the perfect solution for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setLocation('/contact')}
                  className="bg-primary text-primary-foreground hover-elevate active-elevate-2"
                  data-testid="button-contact-cta"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => handleDownloadCatalog(catalogPdf, 'Infeel_V17')}
                  className="hover-elevate active-elevate-2"
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
