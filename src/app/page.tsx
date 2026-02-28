import Hero from "@/components/Hero";
import AnimatedIntro from "@/components/AnimatedIntro";
import GradualBlur from "@/components/GradualBlur";
import CurvedLoop from "@/components/CurvedLoop";
import FadeInItem from "@/components/FadeInItem";
import ShinyText from "@/components/ShinyText";
import BlurText from "@/components/BlurText";
import PortfolioGrid from "@/components/PortfolioGrid";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/30 flex flex-col items-center">
      <div id="asoschi" className="w-full">
        <Hero />
        <AnimatedIntro />
      </div>

      <div className="relative w-full bg-black min-h-[80vh] md:min-h-[100vh] flex flex-col items-center justify-start overflow-hidden pt-0 md:pt-4">
        {/* Yuqori qismdagi CurvedLoop */}
        <div
          id="takliflar"
          className="w-full relative h-[120px] md:h-[200px] pointer-events-auto -mt-8 md:-mt-12"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <CurvedLoop
            marqueeText="BESPOKE PACKAGING ✦ REFINED AESTHETICS ✦ PRECISION CRAFTSMANSHIP ✦ TIMELESS LUXURY ✦ CURATED FOR DISTINCTION ✦ "
            speed={1.5}
            curveAmount={150}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium tracking-[0.15em] fill-gray-200"
          />
        </div>

        {/* Matnli qism rasmlardan oldin */}
        <div className="w-full max-w-[1920px] px-6 pb-4 pt-32 md:pt-40 flex flex-col items-center justify-center text-center relative z-10">
          <FadeInItem delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.1em] text-white mb-6 md:mb-8">
              <ShinyText
                text={
                  <>
                    LOYIHANGIZNI BIRGALIKDA <br className="hidden md:block" /> YARATAMIZ
                  </>
                }
                disabled={false}
                speed={3}
                className="shiny-text"
              />
            </h2>
            <p className="text-gray-400 font-light text-xs md:text-sm tracking-[0.2em] max-w-2xl mx-auto mb-8 md:mb-12 uppercase leading-relaxed">
              Brend qadriyatini ko'zni qamashtiruvchi qadoqlarga ko'chiramiz. <br className="hidden sm:block" />
              Sizning dadil g'oyangiz hamda mening dizayndagi 6 yillik tajribam bilan, <br className="hidden sm:block" />
              premium va mutlaq betakror natijaga erishamiz.
            </p>
          </FadeInItem>
        </div>

        {/* Portfolio Rasmlari Gird'i */}
        <PortfolioGrid />

        {/* Bog'lanish qismi */}
        <div id="boglanish" className="w-full max-w-[1920px] relative z-10 pt-8 md:pt-12 pb-40 px-6 md:px-12 lg:px-24 flex flex-col items-start justify-start text-left border-t border-white/5 mt-0">
          <FadeInItem delay={0.2}>
            <div className="w-full flex flex-col items-start w-full max-w-7xl">
              <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-16 xl:gap-32 w-full">
                {/* Chap tomon: 3 ta qatorli gap */}
                <div className={`text-gray-200 font-light text-2xl md:text-3xl lg:text-4xl leading-[1.3] md:leading-[1.4] lg:leading-[1.4] flex flex-col gap-4 md:gap-6 mb-16 xl:mb-0 max-w-3xl ${interFont.className}`}>
                  <div className="w-full relative">
                    <BlurText
                      text="Har bir qadoq oddiy mahsulot emas, balki brend hikoyasining bir qismi."
                      delay={20}
                      animateBy="words"
                      direction="top"
                    />
                  </div>
                  <div className="w-full relative">
                    <BlurText
                      text="100 dan ortiq loyihalarda shakl, rang va tuyg‘ularni uyg‘unlashtirganman."
                      initialDelay={200}
                      delay={20}
                      animateBy="words"
                      direction="top"
                    />
                  </div>
                  <div className="w-full relative text-white">
                    <BlurText
                      text="Qadoq dizayningizdagi muammolarga birgalikda yechim topamiz."
                      initialDelay={400}
                      delay={20}
                      animateBy="words"
                      direction="top"
                    />
                  </div>
                </div>

                {/* O'ng tomon: Katta Statistika */}
                <div className="flex flex-col items-start xl:items-end xl:text-right font-sans shrink-0 border-l-0 xl:border-l border-white/10 pl-0 xl:pl-16 pb-8 xl:pb-0">
                  <div className="flex flex-col mb-10 xl:mb-16">
                    <span className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-wider mb-2 flex items-center justify-start xl:justify-end">
                      <AnimatedCounter targetValue={100} fontSize={60} places={[100, 10, 1]} fontWeight="500" />
                      <span className="ml-1 md:ml-2">+</span>
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase">Muvaffaqiyatli Loyihalar</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-wider mb-2 flex items-center justify-start xl:justify-end">
                      <AnimatedCounter targetValue={6} fontSize={60} places={[1]} fontWeight="500" />
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase">Yillik Amaliy Tajriba</span>
                  </div>
                </div>
              </div>

              {/* Yengil gorizontal chiziq */}
              <div className="w-full max-w-[90vw] md:max-w-full h-px bg-white/10 my-10 md:my-14 border-none"></div>

              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
                <a href="https://t.me/lslombek" target="_blank" className="inline-block relative overflow-hidden group border border-white/30 hover:border-white transition-colors duration-500 rounded-sm">
                  <span className="relative z-10 w-full flex items-center justify-center px-10 py-4 tracking-[0.2em] font-light text-xs md:text-sm text-white group-hover:text-black transition-colors duration-700">
                    TELEGRAM ORQALI
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:h-full z-0"></span>
                </a>

                <span className="hidden md:block w-px h-12 bg-white/20"></span>

                <a href="tel:+998949024261" className="inline-block relative overflow-hidden group border border-white/30 hover:border-white transition-colors duration-500 rounded-sm">
                  <span className="relative z-10 w-full flex items-center justify-center px-10 py-4 tracking-[0.2em] font-light text-xs md:text-sm text-white group-hover:text-black transition-colors duration-700">
                    +998 94 902 42 61
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:h-full z-0"></span>
                </a>
              </div>
            </div>
          </FadeInItem>
        </div>
      </div>

      {/* Butun ekran pastki qismiga o'ziga Gradual Blur animatsiyasi */}
      <GradualBlur
        preset="bottom"
        target="page"
        exponential={true}
        strength={1}
        divCount={10}
        opacity={1}
        height="10rem"
        className="z-50 pointer-events-none"
      />
    </main>
  );
}
