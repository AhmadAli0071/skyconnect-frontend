
import React, { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  end, 
  duration = 2000,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const isCounting = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !isCounting.current) {
      isCounting.current = true;
      
      let startTime: number | null = null;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * (end - startCount) + startCount);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-white">
      <span className="inline-block">
        {prefix}
        <span>{count}</span>
        {suffix}
      </span>
    </div>
  );
};

export default CounterAnimation;
