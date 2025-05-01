'use client';

import Image from "next/image";
import Link from "next/link";
import RadialMenu from "@/_components/RadialMenu";
import DropdownMenu from '@/_components/ttcombobox';
import { useState } from "react";
import ContactAvatarReveal from "@/_components/ContactAvatarReveal";

export default function Home() {
  const [showComboBox, setShowComboBox] = useState(false);
  




  return (
    <div
      className="h-screen overflow-y-scroll snap-y"
    >
      <section className="h-[1000px] snap-none bg-blue-200 flex items-center justify-center bg-cover bg-center "
        style={{ backgroundImage: "url('/background.jpg')" }}
      >

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-center font-bold text-xl">
            RAELYN A.
          </h1>

        </div>
      </section>
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-[#f3f4f6] to-[#e0e7ff]"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
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
