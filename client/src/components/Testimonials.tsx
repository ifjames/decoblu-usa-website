import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import technicianImage from '@assets/generated_images/Professional_automotive_technician_portrait_b0f06a42.png';

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'BMW Owner',
    rating: 5,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excellent communication and easy booking system. Very happy with the vinyl wrap on my BMW! Wouldn\'t go anywhere else for wraps in the future!',
    avatar: technicianImage,
  },
  {
    name: 'Sarah Williams',
    role: 'Tesla Owner',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. After doing research on companies in the area I was lucky enough to find Deco Blu USA. If you\'re serious about getting your car wrapped and you want a first class job at the right price DO NOT go anywhere else.',
    rating: 5,
    avatar: null,
  },
  {
    name: 'David Chen',
    role: 'Mercedes Owner',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exceptionally friendly and extremely knowledgeable. No pushy sales tactics, very easy to deal with. The Mercedes looks amazing, thank you very much. Highly recommended!',
    rating: 5,
    avatar: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}