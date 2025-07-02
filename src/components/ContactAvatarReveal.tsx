'use client';

import { useEffect, useRef, useState } from 'react';

interface ContactAvatarRevealProps {
  button: React.ReactNode; // Accept the button as a prop
}

export default function ContactAvatarReveal({ button }: ContactAvatarRevealProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.7, // 50% of section must be visible
        rootMargin: "0px 0px -30% 0px"
    }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-gray-100">
      {isVisible && (
        <div className="absolute bottom-6 right-6">
          {button}
        </div>
      )}
    </section>
  );
}