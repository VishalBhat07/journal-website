import React from "react";
import CarouselDemo from "../../components/Carousel/Carousel";
import BlurText from "../../../yes/BlurText/BlurText";
import styles from "./Home.module.css"

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};


const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">

            <div className="flex flex-col w-[70%] items-center gap-8">
                <h1 className="scroll-m-20 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl roboto-slab">
                    Materials and Processing
                </h1>

                <CarouselDemo />

                <h1 className="scroll-m-20 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl roboto-slab">
                    A journal from ASM India
                </h1>

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
