'use client';


import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  loop?: boolean;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((props, ref) => {
  const { texts, rotationInterval = 2000, loop = true } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prev => (prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1));
  };

  const previous = () => {
    setCurrentIndex(prev => (prev === 0 ? (loop ? texts.length - 1 : prev) : prev - 1));
  };

  const jumpTo = (index: number) => {
    const validIndex = Math.max(0, Math.min(index, texts.length - 1));
    setCurrentIndex(validIndex);
  };

  const reset = () => setCurrentIndex(0);

  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }));

  useEffect(() => {
    const interval = setInterval(next, rotationInterval);
    return () => clearInterval(interval);
  }, [rotationInterval]);

  return <span>{texts[currentIndex]}</span>;
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;

