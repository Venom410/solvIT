import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className='relative flex items-center justify-center h-screen bg-cover bg-center bg-hero-pattern'>
      <div className="hero-text text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-blue-950">
          Empowering Businesses Through Transformative Technology Solutions
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto mb-8 text-white">
          Leveraging Cutting-Edge, Innovative Technologies To Enable Organizational Growth, Efficiency, And Competitive Advantage
        </h2>
        <div className='flex justify-center'>
          <Link href="/about">
            <p className='btn flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Explore more
              <FaArrowRight className="ml-2" />
            </p>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[-0.5rem] left-0 h-44 w-full bg-[url('/assets/wave.png')] bg-[length:100rem_11rem] bg-repeat-x animate-[waves_8s_linear_infinite]"></div>
      <div className="absolute bottom-[-0.5rem] left-0 h-44 w-full bg-[url('/assets/wave.png')] bg-[length:100rem_11rem] bg-repeat-x opacity-30 animate-[waves_6s_linear_infinite_reverse]"></div>
      <div className="absolute bottom-[-0.5rem] left-0 h-44 w-full bg-[url('/assets/wave.png')] bg-[length:100rem_11rem] bg-repeat-x opacity-50 animate-[waves_4s_linear_infinite]"></div>

      <style jsx>{`
        @keyframes waves {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 100rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
