import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import heroImage from "@assets/hero bg3.jpg";

export default function Hero() {
  const [location, setLocation] = useLocation();
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const { scrollY } = useScroll();

  const handleViewProducts = () => {
    // If already on home page, scroll to products section
    if (location === "/") {
      const productsSection = document.querySelector("#products");
      if (productsSection) {
        productsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // Navigate to products page if on a different page
      setLocation("/products");
    }
  };

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
          {/* Brand Name */}
          <motion.div
            className="font-bold text-3xl md:text-5xl lg:text-6xl mb-6 tracking-wider"
            style={{ fontFamily: "'Cinzel', serif" }}
            initial={
              animationPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationPlayed ? 0 : 0.6,
              delay: animationPlayed ? 0 : 0.1,
            }}
          >
            <span className="text-white">Deco</span>
            <span className="text-primary">Blu</span>
            <span className="text-white"> USA</span>
          </motion.div>

          {/* Tagline with 3D Effect */}
          <motion.h1
            className="font-bold text-5xl md:text-7xl lg:text-9xl text-white mb-12 leading-tight tracking-wide text-center"
            style={{ 
              fontFamily: "'Cinzel', serif",
              textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
            }}
            initial={
              animationPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationPlayed ? 0 : 0.8,
              delay: animationPlayed ? 0 : 0.3,
            }}
          >
            <span className="block">Transforming Surfaces</span>
          </motion.h1>

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
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 border-0"
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
              onClick={handleViewProducts}
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
