'use client';

import Image from "next/image";
import Link from "next/link";
import RadialMenu from "@/components/RadialMenu";
import DropdownMenu from '@/components/ttcombobox';
import { useState, useRef, useEffect } from "react";
import ContactAvatarReveal from "@/components/ContactAvatarReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showComboBox, setShowComboBox] = useState(false);

  const wheelRef = useRef<HTMLDivElement>(null);
  const images = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const imageElements = gsap.utils.toArray<HTMLElement>(".wheel__card");
    images.current = imageElements;

    const radius = wheel.offsetWidth / 2;
    const center = wheel.offsetWidth / 2;
    const total = images.current.length;
    const slice = (2 * Math.PI) / total;

    images.current.forEach((item, i) => {
      const angle = i * slice;
      const x = center + radius * Math.sin(angle);
      const y = center + radius * Math.cos(angle);

      gsap.set(item, {
        rotation: `${angle}rad`,
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y,
      });
    });

    gsap.to(".wheel", {
      rotate: () => -360,
      ease: "none",
      duration: images.current.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
        snap: 1 / images.current.length,
        invalidateOnRefresh: true,
      },
    });

    function setup() {
      // Re-run the positioning logic on resize
      if (!wheelRef.current) return;
      const wheel = wheelRef.current;
      const imageElements = gsap.utils.toArray<HTMLElement>(".wheel__card");
      images.current = imageElements;
      const radius = wheel.offsetWidth / 2;
      const center = wheel.offsetWidth / 2;
      const total = images.current.length;
      const slice = (2 * Math.PI) / total;
      images.current.forEach((item, i) => {
        const angle = i * slice;
        const x = center + radius * Math.sin(angle);
        const y = center + radius * Math.cos(angle);
        gsap.set(item, {
          rotation: `${-(angle + Math.PI)}rad`,
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    }
    window.addEventListener("resize", setup);
    return () => window.removeEventListener("resize", setup);
  }, []);
  return (
    <div>
      <div className="header fixed top-0 left-0 w-full items-center justify-center">
        <h1>
          I am Raelyn Agbuelos.
        </h1>
      </div>
      {/*This section is the image gallery scroll page */}
      <section className="slider-section">
        <div className="wheel" ref={wheelRef}>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="image 1" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
          <div className="wheel__card">
            <img src="/images/image01.jpg" alt="" />
          </div>
        </div>
      </section>
      <div className="scroll-down"></div>
      <div className="scroll-down-icon">
        <img src="/images/arrow.png" alt="" />
      </div>
      <br></br>
      <section className="flex items-center justify-center p-6 rounded-lg">
        <RadialMenu
          button={
            <button className="hover:scale-115">
              <Image
                aria-hidden
                src="/purple-cam-1.png"
                alt="Explore"
                width={64}
                height={64}
              />
            </button>
          }
        />
        {/* Contact Avatar and reveal*/}
        <ContactAvatarReveal
          button={
            <button className="fixed hover:scale-105 bottom-0 right-6 w-32 h-32 flex items-center justify-center ">
              <img src="/avatar.png" alt="Contact Me" className="w-24 h-24" />
            </button>
          }
        />
      </section>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/rae.lyn_a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.png"
            alt="Instagram icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
        <button
          onClick={() => setShowComboBox(!showComboBox)}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/tiktok.png"
            alt="TikTok icon"
            width={16}
            height={16}
          />
          TikTok
        </button>
        {showComboBox && <DropdownMenu />}
      </footer>
    </div>
  );
}
