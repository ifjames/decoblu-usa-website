import { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import vinylSamplesImage from '@assets/generated_images/Blue_vinyl_material_samples_e7b2a9ac.png';

const vinylWraps = [
  {
    id: 1,
    name: 'Ocean Blue Metallic',
    category: 'Color Change',
    material: '3M 1080 Series',
    finish: 'Metallic',
    durability: '7 years',
    price: '$2,500',
    rating: 4.9,
    image: vinylSamplesImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium metallic finish with excellent durability.',
    variants: ['Gloss', 'Satin'],
    features: ['UV Resistant', 'Easy Removal', 'Air Release'],
  },
  {
    id: 2,
    name: 'Midnight Blue Matte',
    category: 'Color Change',
    material: 'Avery Dennison',
    finish: 'Matte',
    durability: '5 years',
    price: '$2,200',
    rating: 4.8,
    image: vinylSamplesImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sophisticated matte finish for modern vehicles.',
    variants: ['Deep Matte', 'Satin Matte'],
    features: ['Scratch Resistant', 'Easy Install', 'Conformable'],
  },
  {
    id: 3,
    name: 'Electric Blue Chrome',
    category: 'Specialty',
    material: '3M 2080 Series',
    finish: 'Chrome',
    durability: '3 years',
    price: '$3,500',
    rating: 4.7,
    image: vinylSamplesImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-impact chrome finish for attention-grabbing results.',
    variants: ['Mirror Chrome', 'Brushed Chrome'],
    features: ['High Gloss', 'Show Quality', 'Professional Only'],
  },
  {
    id: 4,
    name: 'Carbon Fiber Blue',
    category: 'Textured',
    material: '3M DI-NOC',
    finish: 'Carbon Fiber',
    durability: '10 years',
    price: '$2,800',
    rating: 4.9,
    image: vinylSamplesImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Authentic carbon fiber texture with blue tint.',
    variants: ['3K Weave', '6K Weave'],
    features: ['Textured Feel', 'Architectural Grade', 'Interior/Exterior'],
  },
  {
    id: 5,
    name: 'Sapphire Blue Pearl',
    category: 'Premium',
    material: 'KPMF K75000',
    finish: 'Pearl',
    durability: '8 years',
    price: '$3,200',
    rating: 5.0,
    image: vinylSamplesImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium pearl finish that changes with lighting.',
    variants: ['Deep Pearl', 'Light Pearl'],
    features: ['Color Shift', 'Premium Quality', 'Show Finish'],
  },
  {
    id: 6,
    name: 'Royal Blue Gloss',
    category: 'Color Change',
    material: '3M 1080 Series',
    finish: 'Gloss',
    durability: '7 years',
    price: '$2,300',
    rating: 4.8,
    image: vinylSamplesImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Classic high-gloss finish in royal blue.',
    variants: ['High Gloss', 'Deep Gloss'],
    features: ['Easy Clean', 'UV Stable', 'OEM Quality'],
  },
];

const categories = ['All', 'Color Change', 'Specialty', 'Textured', 'Premium'];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof vinylWraps[0] | null>(null);

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
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Vinyl Wrap Catalog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our premium collection of vinyl wraps and materials.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search vinyl wraps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search-catalog"
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
          {filteredWraps.map((wrap) => (
            <Card 
              key={wrap.id} 
              className="group hover-elevate transition-all duration-300 cursor-pointer"
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
                  <Button size="sm" data-testid={`button-quote-${wrap.id}`}>
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  <Button size="lg" data-testid="button-quote-modal">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}