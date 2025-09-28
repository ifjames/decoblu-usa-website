import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from './ScrollAnimation';
import workshopImage from '@assets/Infeel_V17_digital_catalog_page-0002.jpg';

const features = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Expert installers trained in architectural vinyl applications.',
  },
  {
    icon: Users,
    title: 'Design Team',
    description: 'Experienced professionals for custom interior solutions.',
  },
  {
    icon: Zap,
    title: 'Premium Materials',
    description: 'High-quality Infeel and architectural grade vinyl films.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollAnimation direction="left">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Welcome to{' '}
              <span className="text-primary">Deco</span>
              <span className="text-foreground"> Blu </span>
              <span className="text-black">USA</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                <strong className="text-foreground">With over 15 years of industry experience, Deco Blu USA has become a leading architectural vinyl enhancement company.</strong> We specialize in premium interior vinyl applications for multi-use facilities such as restaurants, hotels, hospitals, and department stores.
              </p>
              <p>
                Our commitment to quality and customer satisfaction ensures that every project is executed to the highest standards. From apartments and office buildings to interior pillars, ceilings, doors, and art walls, we transform spaces with professional vinyl solutions.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 bg-background/50">
                    <CardContent className="p-4 text-center">
                      <div className="mx-auto mb-3 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Checkmarks */}
            <div className="space-y-3">
              {[
                'Premium Infeel V17 architectural materials',
                'Comprehensive warranty on installation',
                'Free consultation and design visualization',
                'Certified interior installation specialists'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation direction="right">
          <div className="relative">
            <img
              src={workshopImage}
              alt="Professional architectural vinyl installation workspace"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}