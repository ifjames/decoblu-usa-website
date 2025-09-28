import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar when mobile menu is open
      if (isOpen) {
        setIsVisible(true);
        return;
      }
      
      // Only show navbar when at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set initial visibility based on current scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const isHomePage = location === '/';
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/catalog', label: 'Catalog' },
    { href: isHomePage ? '#services' : '/#services', label: 'Services' },
    { href: isHomePage ? '#about' : '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b shadow-md transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-heading font-bold text-2xl lg:text-3xl">
              <span className="text-primary">DecoBlu</span>
              <span className="text-foreground"> USA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 hover:text-primary uppercase tracking-wide ${
                  location === link.href ? 'text-primary' : 'text-foreground'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-all duration-200 hover:shadow-lg border border-primary"
              data-testid="button-get-quote"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? 'text-primary' : 'text-muted-foreground'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              size="sm" 
              data-testid="button-get-quote"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-white backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    location === link.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  size="sm" 
                  className="w-full" 
                  data-testid="button-mobile-quote"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/contact';
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}