import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ScrollAnimation from './ScrollAnimation';
import technicianImage from '@assets/Infeel_V17_digital_catalog_page-0003.jpg';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Restaurant Owner',
    rating: 5,
    content: 'Deco Blu USA transformed our restaurant\'s interior completely. The cabinet wrapping looks absolutely stunning and has held up perfectly over two years. Excellent communication and professional installation.',
    avatar: null,
  },
  {
    name: 'Robert Chen',
    role: 'Hotel Manager',
    content: 'After researching architectural vinyl companies, we chose Deco Blu USA for our hotel renovation. If you\'re serious about quality interior transformation at the right price, this is the company to choose.',
    rating: 5,
    avatar: null,
  },
  {
    name: 'Amanda Foster',
    role: 'Homeowner',
    content: 'Exceptionally friendly and extremely knowledgeable team. No pushy sales tactics, very easy to work with. Our kitchen cabinet transformation looks amazing - highly recommended for any interior project!',
    rating: 5,
    avatar: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our satisfied customers say about their architectural vinyl transformation projects.
          </p>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.2} direction="up">
            <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar>
                    {testimonial.avatar && (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    )}
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}