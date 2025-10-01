import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import heroImage from "@assets/hero bgf.jpg";
import logoImage from "@assets/decoblu text logo.png";

export default function Hero() {
  const [, setLocation] = useLocation();
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const { scrollY } = useScroll();

  // Check if animation has been played in this session
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("heroAnimationPlayed");
    if (hasPlayed) {
      setAnimationPlayed(true);
    } else {
      sessionStorage.setItem("heroAnimationPlayed", "true");
    }
  }, []);

  // Zoom effect: scale from 1 to 1.2 as user scrolls from 0 to 800px
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom on Scroll */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img
          src={heroImage}
          alt="Modern interior design with architectural vinyl applications"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo with animation (play once only) */}
          <motion.div
            className="flex justify-center mb-8"
            initial={
              animationPlayed
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: animationPlayed ? 0 : 1, ease: "easeOut" }}
          >
            <img
              src={logoImage}
              alt="DecoBlu USA Logo"
              className="h-20 md:h-24 lg:h-36 w-auto"
              data-testid="img-logo"
            />
          </motion.div>

          {/* Tagline */}
          <motion.h1
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            initial={
              animationPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationPlayed ? 0 : 0.8,
              delay: animationPlayed ? 0 : 0.2,
            }}
          >
            <span className="block text-primary">Transforming Surfaces</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={
              animationPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationPlayed ? 0 : 0.8,
              delay: animationPlayed ? 0 : 0.4,
            }}
            data-testid="text-hero-subheading"
          >
            Professional architectural vinyl solutions for cabinets, walls,
            ceilings, and interior spaces. Transform any surface with premium
            quality wraps.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={
              animationPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationPlayed ? 0 : 0.8,
              delay: animationPlayed ? 0 : 0.6,
            }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground border-primary-border hover-elevate active-elevate-2"
              data-testid="button-contact-us-hero"
              onClick={() => setLocation("/contact")}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-elevate active-elevate-2"
              data-testid="button-view-products"
              onClick={() => setLocation("/catalog")}
            >
              View Products
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
