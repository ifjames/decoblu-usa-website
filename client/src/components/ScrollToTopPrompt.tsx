import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { ArrowUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

interface ScrollToTopPromptProps {
  threshold?: number;
  autoHideDelay?: number;
}

export default function ScrollToTopPrompt({ 
  threshold = 150,
  autoHideDelay 
}: ScrollToTopPromptProps) {
  const isAtBottom = useScrollPosition({ threshold });
  const [showPrompt, setShowPrompt] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsDismissed(false);
  }, [location]);

  useEffect(() => {
    if (!isAtBottom) {
      setIsDismissed(false);
    }
  }, [isAtBottom]);

  useEffect(() => {
    if (isAtBottom && !isDismissed) {
      setShowPrompt(true);

      if (autoHideDelay) {
        const timer = setTimeout(() => {
          setShowPrompt(false);
        }, autoHideDelay);
        return () => clearTimeout(timer);
      }
    } else {
      setShowPrompt(false);
    }
  }, [isAtBottom, isDismissed, autoHideDelay]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setShowPrompt(false);
    setIsDismissed(true);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
          data-testid="scroll-to-top-prompt"
        >
          <div className="bg-background border border-border rounded-lg shadow-2xl p-4 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Back to top?
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                You've reached the end of the page
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={scrollToTop}
                className="gap-2"
                data-testid="button-scroll-to-top"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="hidden sm:inline">Go Up</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDismiss}
                data-testid="button-dismiss-scroll-prompt"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
