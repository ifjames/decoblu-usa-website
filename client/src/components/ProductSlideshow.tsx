import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductSlideshowProps {
  images: string[];
  title: string;
  description: string;
  productUrl?: string;
}

export default function ProductSlideshow({ images, title, description, productUrl }: ProductSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSwipe = (event: any, info: any) => {
    if (info.offset.x > 100) {
      handlePrev();
    } else if (info.offset.x < -100) {
      handleNext();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="space-y-4">
      {/* Slideshow Container */}
      <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleSwipe}
            className="absolute w-full h-full object-cover cursor-grab active:cursor-grabbing"
            alt={`${title} - Image ${currentIndex + 1}`}
            data-testid={`img-slideshow-${currentIndex}`}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          data-testid="button-slideshow-prev"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          data-testid="button-slideshow-next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              data-testid={`button-dot-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl font-semibold text-foreground" data-testid="text-product-title">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed" data-testid="text-product-description">
          {description}
        </p>
        {productUrl && (
          <Button
            variant="outline"
            size="sm"
            className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
            data-testid="button-download-product-guide"
            onClick={() => window.open(productUrl, '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Product Guide
          </Button>
        )}
      </div>
    </div>
  );
}
