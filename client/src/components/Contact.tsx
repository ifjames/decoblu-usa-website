import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

const categoryPages = [
  { label: 'Wrapping', href: '/products' },
  { label: 'Window & Light Tinting', href: '/products' },
  { label: 'Caliper Painting', href: '/products' },
  { label: 'Carbon Fibre Wraps', href: '/products' },
  { label: 'Paint Protection Film', href: '/products' },
  { label: 'CeramicPRO Coating', href: '/products' },
  { label: 'De-chroming', href: '/products' },
  { label: 'Interior Wraps', href: '/products' },
  { label: 'Commercial', href: '/products' },
  { label: 'Design', href: '/products' },
  { label: 'Online Shop', href: '/products' },
];

const serviceOptions = [
  'INFeel Architectural Finish Films',
  'DecoBlu Luxury Vinyl Flooring',
  'DecoBlu Window Films',
  'POV Window Films',
  'Woven by Elite'
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
    vehicleMakeModel: '',
    registration: '',
    services: '',
    message: ''
  });

  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSuccessDialogOpen(true);
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Get in Touch with{' '}
            <span className="text-primary">DecoBlu</span>
            <span className="text-foreground"> USA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our expert team for a personalized consultation and free quote.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <ScrollAnimation direction="left">
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Call us directly</p>
                  <a href="tel:+19542708598" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    (954) 270-8598
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Monday - Friday 7AM - 3:00 PM EST</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.1}>
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Send us a message</p>
                  <a href="mailto:info@decobluusa.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    info@decobluusa.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.2}>
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Visit our showroom</p>
                  <p className="text-foreground font-semibold">1249 Stirling Rd STE 9</p>
                  <p className="text-foreground">Dania Beach, FL 33004, United States</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Social Media */}
            <ScrollAnimation direction="left" delay={0.3}>
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimation direction="right" delay={0.1}>
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Request a Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a personalized quote within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Confirm Email */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmEmail">Confirm Email Address *</Label>
                      <Input
                        id="confirmEmail"
                        type="email"
                        value={formData.confirmEmail}
                        onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                        placeholder="Confirm your email address"
                        required
                      />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <Label htmlFor="vehicleMakeModel">Project Type/Space *</Label>
                      <Input
                        id="vehicleMakeModel"
                        value={formData.vehicleMakeModel}
                        onChange={(e) => handleInputChange('vehicleMakeModel', e.target.value)}
                        placeholder="e.g., Kitchen cabinets, bathroom vanity, office walls"
                        required
                      />
                    </div>

                    {/* Property Information */}
                    <div className="space-y-2">
                      <Label htmlFor="registration">Property/Room Size</Label>
                      <Input
                        id="registration"
                        value={formData.registration}
                        onChange={(e) => handleInputChange('registration', e.target.value)}
                        placeholder="e.g., 10x12 kitchen, 300 sq ft office (optional)"
                      />
                    </div>

                    {/* Services Dropdown */}
                    <div className="space-y-2">
                      <Label htmlFor="services">Service Interested In *</Label>
                      <Select value={formData.services} onValueChange={(value) => handleInputChange('services', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project, including any specific requirements, timeline, or questions you have..."
                        className="min-h-[120px]"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Include as much detail as possible to help us provide an accurate quote. You can also attach photos after submitting this form.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>

        {/* Success Dialog */}
        <AlertDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Thank You!</AlertDialogTitle>
              <AlertDialogDescription>
                Your quote request has been submitted successfully. Our team will review your project details and get back to you within 24 hours with a personalized quote and next steps.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setSuccessDialogOpen(false)}>
                Perfect, thanks!
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}