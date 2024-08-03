import React from 'react';
import Link from 'next/link';
import Title from '@/components/Title';
import { FaLinkedin } from 'react-icons/fa';

interface Founder {
  img: string;
  name: string;
  title: string;
  description: string;
  linkedin: string;
}

const FoundersPage: React.FC = () => {
  const founders: Founder[] = [
    {
      img: '/assets/founder1.jpeg',
      name: "Linda Rose",
      title: "Co-Founder",
      description: "A strategic leader with extensive experience in scaling businesses and leading operations in the tech and hospitality sectors. At pivotal roles in AirBnB, TripAdvisor, and Expedia, I have driven growth and operational excellence.",
      linkedin: "https://www.linkedin.com/in/krish-goyal-6524161a6/"
    },
    {
      img: '/assets/founder2.jpeg',
      name: "Lisa Jacob",
      title: "Co-Founder",
      description: "An innovative thinker with a strong background in marketing and brand strategy. With key positions at Nestle, Unilever, and PepsiCo, I have successfully launched and managed campaigns that resonated with global audiences.",
      linkedin: "https://www.linkedin.com/in/krish-goyal-6524161a6/"
    },
    {
      img: '/assets/founder3.jpeg',
      name: "Ankit Bansal",
      title: "Co-Founder",
      description: "A dynamic business strategist with a robust background in the energy and sustainability sectors. Leading initiatives at Shell, Tesla, and NextEra Energy, I have been instrumental in driving sustainability and growth.",
      linkedin: "https://www.linkedin.com/in/krish-goyal-6524161a6/"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Our Company</h1>
          <p className="text-xl md:text-2xl mb-8">Connecting Ideas. Empowering Innovation.</p>
          <Link href="#founders">
            <p className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
              Meet Our Team
            </p>
          </Link>
        </div>
        <div className="absolute bottom-4 w-full text-center text-white animate-bounce">
          <Link href="#founders">
            <p className="text-2xl cursor-pointer">&darr;</p>
          </Link>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
        <div className="container mx-auto px-4">
        <Title subTitle="Our Founders" title="Who Are They" />

          {/* Founder Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-6 flex flex-col items-center transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative mb-4">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white text-center">
                  {founder.name}
                </h3>
                <p className="text-blue-100 mb-2">{founder.title}</p>
                <p className="text-white text-center mb-4">
                  {founder.description}
                </p>
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center"
                >
                  <FaLinkedin className="mr-1" />
                  LinkedIn
                </Link>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">What Others Say About Our Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 hover:scale-105 hover:shadow-xl">
                <p className="text-black italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae ipsum quis lorem dignissim consectetur.
                </p>
                <p className="text-black mt-2">- Client Name, Company Name</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 hover:scale-105 hover:shadow-xl">
                <p className="text-black italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae ipsum quis lorem dignissim consectetur.
                </p>
                <p className="text-black mt-2">- Client Name, Company Name</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 hover:scale-105 hover:shadow-xl">
                <p className="text-black italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae ipsum quis lorem dignissim consectetur.
                </p>
                <p className="text-black mt-2">- Client Name, Company Name</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Company Founded - Year</li>
              <li>Major Milestone 1 - Year</li>
              <li>Major Milestone 2 - Year</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
