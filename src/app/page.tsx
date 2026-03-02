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
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

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

        {/* Matnli qism rasmlardan oldin olib tashlandi */}

        {/* Bog'lanish qismi (Portfolio rasmlari oldiga ko'chirildi) */}
        <div id="boglanish" className="w-full max-w-[1920px] relative z-10 pt-8 md:pt-12 pb-20 px-6 md:px-12 lg:px-24 flex flex-col items-start justify-start text-left border-t border-white/5 mt-0">
          <FadeInItem delay={0.2}>
            <div className="w-full flex flex-col items-start w-full max-w-7xl">
              <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-16 xl:gap-32 w-full">
                {/* Chap tomon: 3 ta qatorli gap */}
                <div className={`text-gray-200 font-light text-2xl md:text-3xl lg:text-4xl leading-[1.3] md:leading-[1.4] lg:leading-[1.4] flex flex-col gap-4 md:gap-6 mb-16 xl:mb-0 max-w-3xl ${poppinsFont.className}`}>
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

            </div>
          </FadeInItem>
        </div>

        {/* Portfolio Rasmlari Gird'i */}
        <PortfolioGrid />

        {/* Hizmatlar/Takliflar haqida ma'lumot qismi */}
        <div className={`w-full max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 flex flex-col gap-12 text-gray-300 ${poppinsFont.className}`}>
          {/* Sarlavha: Takliflar */}
          <div className="w-full text-left md:text-center md:pb-4 border-b border-white/5 pb-6">
            <FadeInItem delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-serif font-light tracking-[0.1em] text-white">
                <ShinyText
                  text="TAKLIFLAR"
                  disabled={false}
                  speed={3}
                  className="shiny-text uppercase"
                />
              </h2>
            </FadeInItem>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Chap tomon: Matnlar */}
            <div className="flex flex-col gap-8 w-full lg:w-[60%] xl:w-[65%]">
              <FadeInItem delay={0.1}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Individuallashgan qadoqlash dizayni"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Brendingiz xarakteriga mos, 100% noyob va professional qadoqlash dizaynlarini ishlab chiqamiz. Minimalistik, premium yoki o'ziga xos kreativ yechimlar - tanlov sizniki."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.2}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Mahsulotni sotadigan vizual identitet"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Mahsuloting polkada ajralib turishi uchun ko'zga yoqimli, savdo konversiyasini oshiradigan dizayn konsepsiyalarini yaratamiz."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.3}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Premium & luxury packaging"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Gold-foil, emboss, deboss, mat/soft-touch kabi premium effektlarga mos ekskluziv dizaynlar."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.4}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Tezkor dizayn xizmati"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Shoshilinch loyihalar uchun 24-48 soatda sifatli dizayn tayyorlab berish xizmati."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.5}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Qadoqlash strukturasi va mockup tayyorlash"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Na faqat dizayn, balki qadoq shakli, o'lcham variantlari hamda fotorealistik 3D mockup yaratish."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.6}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Brend stiliga mos kompleks qadoqlash"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Mahsulot liniyangiz uchun yagona uslubda- quti, paket, yorliq, stiker, sleeve va boshqalar bo'yicha to'liq set."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.7}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Eksport bozorlariga mos dizayn"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Xalqaro talablar, til variantlari va eksport standartlariga moslashtirilgan dizaynlar."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.8}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Qadoqlashni yangilash (rebranding)"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Mavjud qadoqlashingizni modern uslubda qayta ishlash va sotuv samaradorligini oshirish."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>

              <FadeInItem delay={0.9}>
                <div className="flex flex-col gap-2">
                  <BlurText
                    text="- Raqobatchilar tahlili + yechim"
                    delay={20}
                    animateBy="words"
                    direction="top"
                    className="text-xl md:text-2xl text-white font-medium inline-block"
                  />
                  <BlurText
                    text="Bozordagi raqiblar dizaynini tahlil qilib, sizni ajratib turadigan yuqori samarali dizayn konsepsiyasi."
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-xl font-light leading-relaxed pl-5 inline-block"
                  />
                </div>
              </FadeInItem>
            </div>

            {/* O'ng tomon: Rasm */}
            <div className="w-full lg:w-[40%] xl:w-[35%] flex items-start justify-center lg:sticky lg:top-40 relative">
              <FadeInItem delay={0.4}>
                <div className="w-full flex justify-center lg:justify-end">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Pasted image.png`}
                    alt="Qadoqlash Ustasi"
                    title="Qadoqchi"
                    width={500}
                    height={500}
                    className="w-full max-w-[150px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[230px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </FadeInItem>
            </div>
          </div>
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
