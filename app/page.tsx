"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Title from '../components/Title';
import About from '../components/About';
import Domains from '../components/Domains';
import Technologies from '../components/Technologies';
import Clients from '../components/Clients';
import Founders from '../components/Founders';
import Contactus from '../components/Contactus';
import Videoplayer from '../components/Videoplayer';
import BlogCarousel from '../components/Blog/BlogCarousel';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />

        <About  />

        <Link href="/services"> 
          <Title subTitle="Our Services" title="We Leverage The Power Of Cutting-Edge AI And Automation To Create Digital Experiences That Are Not Only Secure And Robust, But Also Deeply User-Centric, Empowering Our Clients To Thrive In The Digital Era." />
        </Link>

        <Services />

        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Product</h1>
          <p className="text-lg md:text-xl mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Cum aperiam nihil dolore eveniet. Atque et facere distinctio 
          tempore quos delectus numquam molestiae, a fugit adipisci maxime
           veniam quibusdam nisi dicta at omnis quasi voluptatem excepturi, 
           totam pariatur optio, aliquam exercitationem.
          </p>
        </div>
      </section>
      
       <Link href="/domains"> 
          <Title subTitle="Business Domains" title="We Possess A Wealth Of Expertise In Developing Highly Scalable Solutions Across A Diverse Range Of Industry Verticals." />
        </Link>
        <Domains />

        <Title subTitle="Our Technologies" title="We Offer Tailored Solutions For Your Software Development And Outsourcing Needs, Leveraging Our Expertise In Cutting-Edge Technologies, Including AI, To Drive Your Digital Transformation." />
        <Technologies />

        <Title subTitle="Our Clients" title="More Than Just Tech, We Engineer Business Breakthroughs" />
        <Clients />

        <Link href="/blog">      
          <Title subTitle="Blogs" title="Read about the trends" />
        </Link>
        <BlogCarousel/>

        <Link href="/founders"> 
          <Title subTitle="Founders" title="Who Are They" />
        </Link>
        <Founders />

        <Link href="/contact"> 
          <Title subTitle="Contact Us" title="Get In Touch" />
        </Link>
        <Contactus />

      </main>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
