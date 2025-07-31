import React from "react";
import CarouselDemo from "./Carousel/Carousel";



const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center p-8">

            <div className="flex flex-col w-[70%] max-w-4xl items-center gap-6">
                <h1 className="text-center text-white sm:text-5xl md:text-6xl lg:text-7xl roboto-slab">
                    ASM-India: Materials and Processing
                </h1>

                <CarouselDemo />


                <div className="text-xl text-white text-center flex flex-col gap-4">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">Materials and Processing, a journal from ASM India, is a biannual open access research journal featuring peer-reviewed original research articles, technical papers, reviews, case studies, and short communications contributing to the understanding and advancement of engineering and manufacturing processes globally.
                    </p>

                    <p className="leading-7 [&:not(:first-child)]:mt-6">This journal invites high-quality scientific research, case studies, and technical papers discussing industrial practices, providing a platform for students, academicians, scholars, industrialists, researchers, and practitioners to share findings, ideas, and critical insights.</p>
                </div>

            </div>
        </div>

    );
};

export default Home;
