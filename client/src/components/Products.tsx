import { useState } from 'react';
import { Search, Filter, Star, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from '@/components/ui/alert-dialog';
import ScrollAnimation from './ScrollAnimation';
import catalogPage1 from '@assets/Infeel_V17_digital_catalog_page-0004.jpg';
import catalogPage2 from '@assets/Infeel_V17_digital_catalog_page-0005.jpg';
import catalogPage3 from '@assets/Infeel_V17_digital_catalog_page-0006.jpg';
import catalogPage4 from '@assets/Infeel_V17_digital_catalog_page-0007.jpg';
import catalogPage5 from '@assets/Infeel_V17_digital_catalog_page-0008.jpg';
import catalogPage6 from '@assets/Infeel_V17_digital_catalog_page-0009.jpg';

const vinylWraps = [
  {
    id: 1,
    name: 'Premium Solid PS 103',
    category: 'Premium Solid',
    material: 'Infeel V17 Series',
    finish: 'Solid Premium',
    durability: '15+ years',
    price: '$45/sqft',
    rating: 4.9,
    image: catalogPage1,
    description: 'Premium solid finish for high-end architectural applications. Perfect for cabinets and walls.',
    variants: ['Gloss', 'Matte'],
    features: ['Fire Resistant', 'Easy Clean', 'Scratch Resistant'],
  },
  {
    id: 2,
    name: 'Solid Matt SM 816',
    category: 'Solid Matt',
    material: 'Infeel V17 Series',
    finish: 'Matt',
    durability: '12+ years',
    price: '$38/sqft',
    rating: 4.8,
    image: catalogPage2,
    description: 'Sophisticated matte finish ideal for modern interior designs and cabinet applications.',
    variants: ['Deep Matt', 'Light Matt'],
    features: ['Anti-Fingerprint', 'Easy Install', 'Durable'],
  },
  {
    id: 3,
    name: 'Wood Grain WD 234',
    category: 'Wood',
    material: 'Infeel V17 Wood Series',
    finish: 'Wood Texture',
    durability: '10+ years',
    price: '$52/sqft',
    rating: 4.9,
    image: catalogPage3,
    description: 'Authentic wood grain texture for natural-looking cabinet and wall applications.',
    variants: ['Light Oak', 'Dark Walnut'],
    features: ['Textured Surface', 'Natural Look', 'Moisture Resistant'],
  },
  {
    id: 4,
    name: 'Metal Finish MT 209',
    category: 'Metal',
    material: 'Infeel V17 Metal Series',
    finish: 'Brushed Metal',
    durability: '12+ years',
    price: '$48/sqft',
    rating: 4.7,
    image: catalogPage4,
    description: 'Premium brushed metal finish for contemporary architectural applications.',
    variants: ['Brushed Steel', 'Brushed Aluminum'],
    features: ['Metallic Sheen', 'Architectural Grade', 'Corrosion Resistant'],
  },
  {
    id: 5,
    name: 'Stone Texture ST 110',
    category: 'Stone',
    material: 'Infeel V17 Stone Series',
    finish: 'Natural Stone',
    durability: '15+ years',
    price: '$55/sqft',
    rating: 5.0,
    image: catalogPage5,
    description: 'Natural stone texture perfect for feature walls and architectural elements.',
    variants: ['Marble', 'Granite'],
    features: ['Natural Texture', 'Premium Quality', 'Heat Resistant'],
  },
  {
    id: 6,
    name: 'Fabric Pattern FB 851',
    category: 'Fabric',
    material: 'Infeel V17 Fabric Series',
    finish: 'Textile',
    durability: '8+ years',
    price: '$42/sqft',
    rating: 4.6,
    image: catalogPage6,
    description: 'Sophisticated fabric texture for luxury interior design applications.',
    variants: ['Linen', 'Canvas'],
    features: ['Soft Touch', 'Elegant Look', 'Easy Maintenance'],
  },
];

const categories = ['All', 'Premium Solid', 'Solid Matt', 'Wood', 'Metal', 'Stone', 'Fabric'];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof vinylWraps[0] | null>(null);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<typeof vinylWraps[0] | null>(null);

  const filteredWraps = vinylWraps.filter(wrap => {
    const matchesSearch = wrap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         wrap.material.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || wrap.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Infeel V17 Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of premium architectural vinyl wraps from the Infeel V17 series for interior applications.
          </p>
        </ScrollAnimation>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search vinyl wraps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search-products"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredWraps.map((wrap, index) => (
            <ScrollAnimation key={wrap.id} delay={index * 0.1} direction="up">
            <Card 
              className="group hover-elevate transition-all duration-300 cursor-pointer h-full"
              onClick={() => setSelectedProduct(wrap)}
              data-testid={`card-product-${wrap.id}`}
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={wrap.image}
                    alt={wrap.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary">{wrap.category}</Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium">{wrap.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-heading text-xl mb-2">{wrap.name}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{wrap.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">{wrap.material}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Finish:</span>
                    <span className="font-medium">{wrap.finish}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Durability:</span>
                    <span className="font-medium">{wrap.durability}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{wrap.price}</span>
                  <Button 
                    size="sm" 
                    data-testid={`button-quote-${wrap.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuoteProduct(wrap);
                      setQuoteDialogOpen(true);
                    }}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Product Detail Modal (Simple version for demo) */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-heading text-2xl">{selectedProduct.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{selectedProduct.category}</Badge>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedProduct(null)} data-testid="button-close-modal">
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">Specifications</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Material:</span>
                        <span className="font-medium">{selectedProduct.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Finish:</span>
                        <span className="font-medium">{selectedProduct.finish}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durability:</span>
                        <span className="font-medium">{selectedProduct.durability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rating:</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-medium">{selectedProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Available Variants</h3>
                    <div className="space-y-2 mb-4">
                      {selectedProduct.variants.map((variant, index) => (
                        <Badge key={index} variant="outline">{variant}</Badge>
                      ))}
                    </div>
                    
                    <h3 className="font-semibold mb-3">Features</h3>
                    <div className="space-y-1">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="text-sm text-muted-foreground">• {feature}</div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-3xl font-bold text-primary">{selectedProduct.price}</span>
                  <Button 
                    size="lg" 
                    data-testid="button-quote-modal"
                    onClick={() => {
                      setQuoteProduct(selectedProduct);
                      setQuoteDialogOpen(true);
                      setSelectedProduct(null);
                    }}
                  >
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quote Request Dialog */}
        <AlertDialog open={quoteDialogOpen} onOpenChange={(open) => {
          setQuoteDialogOpen(open);
          if (!open) setQuoteProduct(null);
        }}>
          <AlertDialogContent className="max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-heading text-xl">
                Request Quote for {quoteProduct?.name}
              </AlertDialogTitle>
              <AlertDialogDescription>
                Thank you for your interest in our premium architectural vinyl wrap!
              </AlertDialogDescription>
              <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <button 
                  className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
                  onClick={() => window.open('tel:+15551239727', '_self')}
                  data-testid="button-call-quote"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">Call us at <strong>(555) 123-WRAP</strong></span>
                </button>
                <button 
                  className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
                  onClick={() => window.open('mailto:info@decobluusa.com', '_self')}
                  data-testid="button-email-quote"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">Email <strong>info@decobluusa.com</strong></span>
                </button>
                {quoteProduct && (
                  <div className="pt-2 border-t border-muted">
                    <span className="text-sm text-muted-foreground">
                      Product Code: <strong>{quoteProduct.name.split(' ').pop()}</strong>
                    </span>
                  </div>
                )}
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setQuoteDialogOpen(false)}>
                Got it, thanks!
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}