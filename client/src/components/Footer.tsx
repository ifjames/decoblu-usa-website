import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from '@/components/ui/alert-dialog';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <div className="font-heading font-bold text-3xl">
                  <span className="text-primary">DecoBlu</span>
                  <span className="text-gray-400"> USA</span>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                We delivers fast, cost-efficient, and sustainable renovations with zero waste. We specialize in turnkey projects and cladding, completing work without demolition or downtime so buildings stay operational.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.label}
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 DecoBlu USA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                data-testid="button-privacy-policy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setTermsOpen(true)}
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                data-testid="button-terms-service"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setCookiesOpen(true)}
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                data-testid="button-cookie-policy"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy Policy Modal */}
      <AlertDialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold">Privacy Policy</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4 text-left">
              <p><strong>Effective Date:</strong> January 1, 2024</p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you request a quote, contact us, or use our services. This may include your name, email address, phone number, project details, and any other information you choose to provide.</p>
                
                <h3 className="font-semibold text-foreground">How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.</p>
                
                <h3 className="font-semibold text-foreground">Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
                
                <h3 className="font-semibold text-foreground">Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h3 className="font-semibold text-foreground">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@decobluusa.com or (954) 270-8598.</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setPrivacyOpen(false)}>
              I Understand
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Terms of Service Modal */}
      <AlertDialog open={termsOpen} onOpenChange={setTermsOpen}>
        <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold">Terms of Service</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4 text-left">
              <p><strong>Effective Date:</strong> January 1, 2024</p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Acceptance of Terms</h3>
                <p>By accessing and using DecoBlu USA's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                
                <h3 className="font-semibold text-foreground">Services</h3>
                <p>DecoBlu USA provides professional architectural vinyl wrapping services for interior surfaces including cabinets, walls, ceilings, and other interior spaces.</p>
                
                <h3 className="font-semibold text-foreground">Payment Terms</h3>
                <p>Payment terms will be specified in individual project contracts. Generally, a deposit is required before work begins, with final payment due upon project completion.</p>
                
                <h3 className="font-semibold text-foreground">Warranty</h3>
                <p>We provide a comprehensive warranty on our installation work. Specific warranty terms depend on the materials used and will be detailed in your project contract.</p>
                
                <h3 className="font-semibold text-foreground">Limitation of Liability</h3>
                <p>DecoBlu USA's liability shall not exceed the total amount paid for the specific service that gave rise to the claim.</p>
                
                <h3 className="font-semibold text-foreground">Contact Information</h3>
                <p>For questions regarding these terms, contact us at legal@decobluusa.com or (954) 270-8598.</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setTermsOpen(false)}>
              I Agree
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Cookie Policy Modal */}
      <AlertDialog open={cookiesOpen} onOpenChange={setCookiesOpen}>
        <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold">Cookie Policy</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4 text-left">
              <p><strong>Effective Date:</strong> January 1, 2024</p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">What Are Cookies</h3>
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They allow us to recognize your device and remember certain information about your preferences.</p>
                
                <h3 className="font-semibold text-foreground">How We Use Cookies</h3>
                <p>We use cookies to enhance your browsing experience, analyze website traffic, personalize content, and improve our services. This includes essential cookies for website functionality and analytics cookies to understand how visitors use our site.</p>
                
                <h3 className="font-semibold text-foreground">Types of Cookies We Use</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your choices and settings</li>
                </ul>
                
                <h3 className="font-semibold text-foreground">Managing Cookies</h3>
                <p>You can control and manage cookies through your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.</p>
                
                <h3 className="font-semibold text-foreground">Contact Us</h3>
                <p>If you have questions about our use of cookies, please contact us at contact@decobluusa.com.</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setCookiesOpen(false)}>
              Got It
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  );
}