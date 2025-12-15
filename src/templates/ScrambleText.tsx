import { useState, useRef, useEffect } from 'react';

export default function ScrambleText({ 
  startText = "packjack", 
  endText = "jackson macgregor",
	shuffleDelay = 2000,
  className = "",
  style = {}
}) {
  const [text, setText] = useState(endText);
  const [currentTarget, setCurrentTarget] = useState(endText);
  const intervalRef = useRef<number | null>(null);
  const hasShuffledRef = useRef(false);
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShuffledRef.current) {
        shuffleTo(startText);
        setCurrentTarget(startText);
        hasShuffledRef.current = true;
      }
    }, shuffleDelay);
    
    return () => clearTimeout(timer);
  }, [shuffleDelay, startText]);
  
  const shuffleTo = (targetText: string) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    const fromText = text;
    const maxLen = Math.max(fromText.length, targetText.length);
    let frame = 0;
    const totalFrames = 40;
    
    intervalRef.current = setInterval(() => {
      if (frame >= totalFrames) {
        setText(targetText);
        intervalRef.current && clearInterval(intervalRef.current);
				intervalRef.current = null;

        return;
      }
      
      const progress = frame / totalFrames;
      let result = "";
      
      for (let i = 0; i < maxLen; i++) {
        const charProgress = Math.max(0, (progress - i / maxLen) * (maxLen / (maxLen - i || 1)));
        
        if (charProgress >= 1) {
          result += targetText[i] || "";
        } else if (charProgress > 0) {
          result += chars[Math.floor(Math.random() * chars.length)];
        } else {
          result += fromText[i] || "";
        }
      }
      
      setText(result);
      frame++;
    }, 50);
  };
  
  const handleMouseEnter = () => {
    if (currentTarget !== endText) {
      shuffleTo(endText);
      setCurrentTarget(endText);
    }
  };
  
  const handleMouseLeave = () => {
    if (hasShuffledRef.current && currentTarget !== startText) {
      shuffleTo(startText);
      setCurrentTarget(startText);
    }
  };
  
  return (
    <span 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={style}
    >
      {text}
    </span>
  );
}
