import { ArrowRight, Palette, Shield, Sparkles, Zap, Car, Brush, Layers, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Palette,
    title: 'Color Change',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transform your vehicle with premium color change wraps.',
    link: '/catalog',
  },
  {
    icon: Shield,
    title: 'Paint Protection',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Protect your vehicle\'s original paint with clear film.',
    link: '/catalog',
  },
  {
    icon: Sparkles,
    title: 'Chrome Delete',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modernize your vehicle with sleek chrome alternatives.',
    link: '/catalog',
  },
  {
    icon: Zap,
    title: 'Carbon Fiber',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add sporty carbon fiber accents to enhance performance look.',
    link: '/catalog',
  },
  {
    icon: Car,
    title: 'Commercial Wraps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional vehicle branding for business applications.',
    link: '/catalog',
  },
  {
    icon: Brush,
    title: 'Custom Graphics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unique designs and graphics tailored to your vision.',
    link: '/catalog',
  },
  {
    icon: Layers,
    title: 'Textured Finishes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore matte, satin, and specialty texture options.',
    link: '/catalog',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional installation by certified technicians.',
    link: '/catalog',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What We Do at{' '}
            <span className="text-primary">Deco</span>
            <span className="text-foreground"> Blu </span>
            <span className="text-black">USA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover-elevate transition-all duration-300"
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
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}