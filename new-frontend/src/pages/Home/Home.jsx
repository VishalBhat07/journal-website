import React from "react";
import CarouselDemo from "./Carousel/Carousel";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 pt-16">
      <div className="flex flex-col w-[80vw] md:w-[70vw] items-center gap-8">
        <h1 className="text-center text-foreground text-4xl md:text-5xl roboto-slab">
          ASM-India: Materials and Processing
        </h1>

        <CarouselDemo />

        <div className="text-sm md:text-base text-foreground text-center flex flex-col gap-6">
          <p className="leading-7">
            Materials and Processing, a journal from ASM India, is a biannual
            open access research journal featuring peer-reviewed original
            research articles, technical papers, reviews, case studies, and
            short communications contributing to the understanding and
            advancement of engineering and manufacturing processes globally.
          </p>

          <p className="leading-7">
            This journal invites high-quality scientific research, case studies,
            and technical papers discussing industrial practices, providing a
            platform for students, academicians, scholars, industrialists,
            researchers, and practitioners to share findings, ideas, and
            critical insights.
          </p>
        </div>

        <HomeHeroSection />
      </div>
    </div>
  );
};

export default Home;
