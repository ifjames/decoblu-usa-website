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
  { label: 'Wrapping', href: '/catalog' },
  { label: 'Window & Light Tinting', href: '/catalog' },
  { label: 'Caliper Painting', href: '/catalog' },
  { label: 'Carbon Fibre Wraps', href: '/catalog' },
  { label: 'Paint Protection Film', href: '/catalog' },
  { label: 'CeramicPRO Coating', href: '/catalog' },
  { label: 'De-chroming', href: '/catalog' },
  { label: 'Interior Wraps', href: '/catalog' },
  { label: 'Commercial', href: '/catalog' },
  { label: 'Design', href: '/catalog' },
  { label: 'Online Shop', href: '/catalog' },
];

const serviceOptions = [
  'Wrapping',
  'Window & Light Tinting', 
  'Caliper Painting',
  'Carbon Fibre Wraps',
  'Paint Protection Film',
  'CeramicPRO Coating',
  'De-chroming',
  'Interior Wraps',
  'Commercial',
  'Design'
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
    <section id="contact" className="py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - General Enquiries */}
          <div className="space-y-8">
            <ScrollAnimation>
              <h2 className="font-heading font-bold text-3xl text-white mb-6">
                GENERAL ENQUIRIES
              </h2>
              <p className="text-gray-300 mb-8">
                For specific services, please use the quote form on each category page. For general 
                or other enquiries, contact us here.
              </p>
            </ScrollAnimation>

            {/* Quick Navigation */}
            <ScrollAnimation delay={0.1}>
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Quick Navigation to category pages</h3>
                <div className="space-y-2">
                  {categoryPages.map((page, index) => (
                    <a
                      key={index}
                      href={page.href}
                      className="block text-gray-400 hover:text-white transition-colors underline"
                    >
                      {page.label}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation delay={0.2}>
              <div className="space-y-4">
                <div className="text-white">
                  <strong>+44 (0) 2380 236 001</strong>
                </div>
                <div className="text-white">
                  <strong>sales@monsterwraps.co.uk</strong>
                </div>
                <div className="text-gray-300">
                  Unit 2F Herald Ind Estate, Hedge End, Southampton SO30 2JW
                </div>
              </div>
            </ScrollAnimation>

            {/* Social Media Icons */}
            <ScrollAnimation delay={0.3}>
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-8 h-8 text-gray-400 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Side - Contact Form */}
          <ScrollAnimation direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-0">
              {/* Name Fields */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name (required)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm text-gray-400">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm text-gray-400">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Contact Phone Number (required)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email (required)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                  required
                />
              </div>

              {/* Confirm Email */}
              <div className="space-y-2">
                <Label htmlFor="confirmEmail" className="text-white">Confirm Email (required)</Label>
                <Input
                  id="confirmEmail"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                  required
                />
              </div>

              {/* Vehicle Make and Model */}
              <div className="space-y-2">
                <Label htmlFor="vehicleMakeModel" className="text-white">Vehicle Make and Model (required)</Label>
                <Input
                  id="vehicleMakeModel"
                  value={formData.vehicleMakeModel}
                  onChange={(e) => handleInputChange('vehicleMakeModel', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                  required
                />
              </div>

              {/* Registration Number */}
              <div className="space-y-2">
                <Label htmlFor="registration" className="text-white">Registration Number</Label>
                <Input
                  id="registration"
                  value={formData.registration}
                  onChange={(e) => handleInputChange('registration', e.target.value)}
                  placeholder="If unknown please put N/A"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500"
                />
              </div>

              {/* Services */}
              <div className="space-y-2">
                <Label htmlFor="services" className="text-white">Which service(s) are you interested in? (required)</Label>
                <Select value={formData.services} onValueChange={(value) => handleInputChange('services', value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {serviceOptions.map((service) => (
                      <SelectItem key={service} value={service} className="text-white hover:bg-gray-600">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">How can we help? (required)</Label>
                <p className="text-sm text-gray-400">Don't forget to add photos to assist us with your quotation when prompted after you have submitted your enquiry</p>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 min-h-[120px]"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-2"
              >
                SUBMIT
              </Button>
            </form>
          </ScrollAnimation>
        </div>

        {/* Success Dialog */}
        <AlertDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Thank You!</AlertDialogTitle>
              <AlertDialogDescription>
                Your enquiry has been submitted successfully. We'll get back to you within 24 hours.
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