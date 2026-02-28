"use client";
import { useEffect, useRef, useState } from "react";
import BlurText from "@/components/BlurText";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ['latin', 'cyrillic'] });

export default function AnimatedIntro() {
    const wordDelayMs = 10; // yanada darrov chiqib kelishi uchun 10ms
    const trackingClass = "tracking-normal"; // o'ziga xos qalin shrift

    const text1 = "Men Islombek Botirov, 6 yil davomida turli sohalardagi brendlar uchun qadoq dizayni yaratish bilan shug‘ullanaman.";
    const text2 = "Maqsadim mahsulotingiz xaridor qo‘lida ajralib turishi, esda qolishi va brendingizni to‘liq ifodalashiga yordam berish.";

    const text1WordsCount = text1.split(' ').length;
    const initialDelay2 = text1WordsCount * wordDelayMs;

    const handRef = useRef<HTMLDivElement>(null);
    const [showHand, setShowHand] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShowHand(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (handRef.current) {
            observer.observe(handRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full bg-[#242424] flex items-start justify-center overflow-hidden relative">
            <div className={`relative w-full max-w-[1920px] px-4 md:px-8 lg:px-12 py-8 md:py-14 text-white flex flex-row items-center justify-between gap-6 ${interFont.className}`}>

                {/* Left Text side */}
                <div className="relative z-10 w-full md:w-[60%] lg:w-[55%] flex flex-col gap-4 md:gap-6 tracking-wide">
                    <BlurText
                        text={text1}
                        delay={wordDelayMs}
                        animateBy="words"
                        direction="top"
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left leading-[1.2] font-light text-white mb-2 md:mb-4"
                    />

                    <BlurText
                        text={text2}
                        initialDelay={initialDelay2}
                        delay={wordDelayMs}
                        animateBy="words"
                        direction="top"
                        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left leading-[1.25] font-light text-white/80"
                    />
                </div>

                {/* Hand Image mapped to the right - with Scroll trigger */}
                <div ref={handRef} className="relative w-1/2 md:w-[40%] lg:w-[35%] flex items-center justify-end pointer-events-none z-0">
                    {showHand && (
                        <img
                            src={`/qol.svg?t=${Date.now()}`}
                            alt="Qo'l rasmi"
                            className="w-full max-w-[250px] lg:max-w-[400px] xl:max-w-[550px] h-auto object-contain drop-shadow-2xl opacity-40 lg:opacity-100"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
