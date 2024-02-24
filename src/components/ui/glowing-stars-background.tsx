'use client'

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/utils";

export default function GlowingStarsBackground({ className }: { className?: string }) {
  const currentViewWidth = window.innerWidth;
  let currentViewPortSize = '2xl';
  
  if (currentViewWidth <= 1600) {
    currentViewPortSize = 'xl'
  }
  if (currentViewWidth <= 1024) {
    currentViewPortSize = 'lg'
  }
  if (currentViewWidth <= 640) {
    currentViewPortSize = 'md'
  }
  if (currentViewWidth <= 440) {
    currentViewPortSize = 'sm'
  }

  const stars: any = {
    'sm': {
      qtd: 100,
      columns: 10
    },
    'md': {
      qtd: 500,
      columns: 20
    },
    'lg': {
      qtd: 800,
      columns: 30
    },
    'xl': {
      qtd: 1000,
      columns: 50
    },
    '2xl': {
      qtd: 1500,
      columns: 60
    },
  }

  const { qtd, columns } = stars[currentViewPortSize];

  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 100 }, () =>
        Math.floor(Math.random() * qtd)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`h-48 p-1 w-full ${className} -z-20`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(qtd)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;

        return (
          <div key={`matrix-col-${starIdx}}`} >
            <Star
              isGlowing={isGlowing}
              delay={delay}
            />
            
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

function Star({ isGlowing, delay }: { isGlowing: boolean; delay: number }) {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#888" : "#444",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#444] h-[1.5px] w-[1.5px] rounded-full relative -z-20")}
    ></motion.div>
  );
};

function Glow({ delay }: { delay: number }){
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className={`absolute left-1/2 -translate-x-1/2 h-[0.1rem] w-[0.1rem] -z-20 rounded-full bg-secondary blur-[8px] shadow-2xl shadow-[#444]`}
    />
  );
};
