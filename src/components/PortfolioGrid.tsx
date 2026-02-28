"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import data from "@/lib/portfolioData.json";
import FadeInItem from "@/components/FadeInItem";

export default function PortfolioGrid() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<{ src: string }[]>([]);

  const openLightbox = (num: number) => {
    // @ts-ignore
    const projImages = data[`project-${num}`] || [];
    // Asosiy rasm bilan qolganini qo'shib array qilamiz
    const allImages = [`/porta/${num}.png`, ...projImages].map((src: string) => ({ src }));
    setImages(allImages);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Komponent o'chganda (unmount) skrollni tozalash
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div id="portfolio" className="w-full max-w-[1920px] px-6 md:px-12 lg:px-24 pt-4 md:pt-8 pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <FadeInItem key={num} delay={num * 0.1}>
            <div onClick={() => openLightbox(num)} className="relative aspect-[4/5] w-full group cursor-pointer z-10 hover:z-50 transition-all duration-500">
              {/* Orqa fon rangi seli (Shadow Glow) */}
              <div className="absolute -inset-6 md:-inset-10 lg:-inset-12 z-0 opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] ease-out pointer-events-none transform-gpu group-hover:scale-105">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/porta/${num}.png`}
                  alt=""
                  fill
                  quality={90}
                  className="object-cover blur-[50px] md:blur-[70px] saturate-200 opacity-80"
                />
              </div>

              {/* Asosiy ko'rinuvchi karta oyna */}
              <div className="absolute inset-0 overflow-hidden rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.8)] z-10 border border-white/5 transition-colors duration-[800ms] group-hover:border-white/20 bg-[#000]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/porta/${num}.png`}
                  alt={`Portfolio Islom Aka ${num}`}
                  fill
                  quality={90}
                  className="object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] grayscale group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </FadeInItem>
        ))}
      </div>

      {open && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-start overflow-y-auto bg-black/80 backdrop-blur-xl p-6 md:p-12 transition-opacity duration-300"
        >
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 z-[110] text-gray-400 hover:text-white transition-colors bg-black/50 hover:bg-black/80 p-3 rounded-full border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl mx-auto mt-8 md:mt-12 mb-24 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 relative z-10 py-12 md:py-20 place-content-center place-items-center"
          >
            {images.map((img, i) => (
              <FadeInItem key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl border border-white/5">
                  <Image
                    src={img.src}
                    alt={`Portfolio Loyiha Rasmi ${i}`}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </FadeInItem>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
