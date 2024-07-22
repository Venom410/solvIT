import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

interface Founder {
  img: string;
  name: string;
  title: string;
  linkedin: string;
}

const founders: Founder[] = [
  {
    img: '/assets/founder1.jpeg',
    name: 'Linda Rose',
    title: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/krish-goyal-6524161a6/',
  },
  {
    img: '/assets/founder2.jpeg',
    name: 'Lisa Jacob',
    title: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/krish-goyal-6524161a6/',
  },
  {
    img: '/assets/founder3.jpeg',
    name: 'Mark Parker',
    title: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/krish-goyal-6524161a6/',
  },
];

const Founders: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-screen-xl mx-auto mt-8 px-8">
      {founders.map((founder, index) => (
        <div
          key={index}
          className="relative flex flex-col rounded-lg bg-white text-gray-700 shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={founder.img}
              alt={founder.name}
              width={400}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-8 text-center">
            <h5 className="mb-2 text-2xl font-semibold text-gray-900">
              {founder.name}
            </h5>
            <p className="mb-4 text-gray-600">
              {founder.title}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-3xl hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founders;
