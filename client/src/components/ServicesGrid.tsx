import { ArrowRight, Palette, Shield, Sparkles, Home, Layers, Brush, Wrench, Grid3X3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';

const services = [
  {
    icon: Home,
    title: 'Cabinet Wrapping',
    description: 'Transform kitchen and bathroom cabinets with premium vinyl wraps. Cost-effective alternative to replacement.',
    link: '/catalog',
  },
  {
    icon: Layers,
    title: 'Wall Covering',
    description: 'Professional wall vinyl application for residential and commercial spaces. Durable and easy to maintain.',
    link: '/catalog',
  },
  {
    icon: Grid3X3,
    title: 'Ceiling Applications',
    description: 'Innovative ceiling treatments with architectural vinyl films. Perfect for modern interior design.',
    link: '/catalog',
  },
  {
    icon: Palette,
    title: 'Wood Grain Finishes',
    description: 'Premium wood grain vinyl patterns including luxury wood textures from our WD series collection.',
    link: '/catalog',
  },
  {
    icon: Sparkles,
    title: 'Metal Finishes',
    description: 'Sophisticated metal-look vinyl wraps including brushed, polished, and textured metal finishes.',
    link: '/catalog',
  },
  {
    icon: Shield,
    title: 'Stone & Marble',
    description: 'Natural stone and marble-look vinyl films for countertops, walls, and architectural elements.',
    link: '/catalog',
  },
  {
    icon: Brush,
    title: 'Custom Patterns',
    description: 'Unique fabric, leather, and abstract patterns for specialty interior design applications.',
    link: '/catalog',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Expert installation services for all architectural vinyl applications by certified technicians.',
    link: '/catalog',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What We Do at{' '}
            <span className="text-primary">Deco</span>
            <span className="text-foreground"> Blu </span>
            <span className="text-black">USA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional architectural vinyl wrapping services for cabinets, walls, ceilings, and interior spaces across the United States.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation 
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <Card 
                  className="group hover-elevate transition-all duration-300 h-full"
                  data-testid={`card-service-${index}`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      data-testid={`button-service-${index}`}
                      onClick={() => window.location.href = '/catalog'}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}