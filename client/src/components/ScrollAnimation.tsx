import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className = ''
}: ScrollAnimationProps) {
  const getInitialAnimation = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: -50 };
      case 'right':
        return { opacity: 0, x: 50 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalAnimation = () => {
    switch (direction) {
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0, x: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialAnimation()}
      whileInView={getFinalAnimation()}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut'
      }}
      viewport={{ 
        once: true,
        margin: '-100px'
      }}
    >
      {children}
    </motion.div>
  );
}