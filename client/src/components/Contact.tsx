import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Vinyl Wrap Street', 'Los Angeles, CA 90210'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['(555) 123-WRAP', '(555) 123-9727'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@decobluusa.com', 'quotes@decobluusa.com'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday - Friday', '8:00 AM - 6:00 PM'],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Where to Find Us!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit our state-of-the-art facility specializing in architectural vinyl applications or get in touch with our expert team.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <ScrollAnimation key={index} delay={index * 0.1} direction="up">
                  <Card className="hover-elevate transition-all duration-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                  </ScrollAnimation>
                );
              })}
            </div>

            {/* CTA */}
            <ScrollAnimation direction="left">
            <div className="text-center lg:text-left">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to transform your interior space with premium architectural vinyl wraps?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  data-testid="button-get-quote-contact"
                  onClick={() => alert('Thank you for your interest! Please call us at (555) 123-WRAP or email info@decobluusa.com for a free quote.')}
                >
                  Get Free Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  data-testid="button-call-now"
                  onClick={() => window.open('tel:+15551239727', '_self')}
                >
                  Call Now
                </Button>
              </div>
            </div>
            </ScrollAnimation>
          </div>

          {/* Map Placeholder */}
          <ScrollAnimation direction="right">
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Visit Our Showroom</h3>
                  <p className="text-muted-foreground">
                    Experience our architectural vinyl samples in person.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Location Badge */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Los Angeles, CA</span>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}