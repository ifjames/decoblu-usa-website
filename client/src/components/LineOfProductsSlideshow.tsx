import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const productImages = [
  {
    title: 'INFeel Product 1',
    images: [
      new URL('@assets/product1/1.jpg', import.meta.url).href,
      new URL('@assets/product1/2.jpg', import.meta.url).href,
    ]
  },
  {
    title: 'INFeel Product 2',
    images: [
      new URL('@assets/product2/a.jpg', import.meta.url).href,
      new URL('@assets/product2/b.jpg', import.meta.url).href,
      new URL('@assets/product2/c.jpg', import.meta.url).href,
    ]
  },
  {
    title: 'INFeel Product 3',
    images: [
      new URL('@assets/product3/aa.jpg', import.meta.url).href,
      new URL('@assets/product3/bb.jpg', import.meta.url).href,
      new URL('@assets/product3/cc.jpg', import.meta.url).href,
      new URL('@assets/product3/dd.jpg', import.meta.url).href,
    ]
  },
  {
    title: 'INFeel Product 4',
    images: [
      new URL('@assets/product4/aaa.jpg', import.meta.url).href,
      new URL('@assets/product4/bbb.jpg', import.meta.url).href,
      new URL('@assets/product4/ccc.jpg', import.meta.url).href,
    ]
  },
];

const allImages = productImages.flatMap(product => 
  product.images.map(img => ({ url: img, title: product.title }))
);

export default function LineOfProductsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Line of Products{' '}
            <span className="text-primary">INFeel</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up">
          <div className="relative w-full max-w-5xl mx-auto aspect-video bg-muted rounded-lg overflow-hidden group shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={allImages[currentIndex].url}
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
                alt={allImages[currentIndex].title}
                data-testid={`img-slideshow-${currentIndex}`}
              />
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handlePrev}
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleNext}
              data-testid="button-next-slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  data-testid={`button-dot-${index}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
