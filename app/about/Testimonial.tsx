import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, FinTech Solutions",
    testimony: "SolvIT's cutting-edge technology solutions have transformed our financial services, enabling us to deliver exceptional value to our clients."
  },
  {
    id: 2,
    name: "David Lee",
    role: "CTO, HealthTech Innovations",
    testimony: "The expertise and innovation brought by SolvIT are unmatched. They helped us streamline our healthcare platform and improve patient outcomes."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Product Manager, EduTech Corp",
    testimony: "Their data analytics and automation strategies have been pivotal in enhancing our educational products and user experience."
  },
  {
    id: 4,
    name: "James Williams",
    role: "CFO, InsureCo",
    testimony: "SolvIT's financial automation solutions have significantly reduced our operational costs and improved accuracy across our financial processes."
  },
  {
    id: 5,
    name: "Linda Brown",
    role: "COO, AdTech Ventures",
    testimony: "The transformation of our operational processes by SolvIT has made us more efficient and responsive to market changes."
  },
  {
    id: 6,
    name: "Michael Clark",
    role: "HR Manager, TalentHub",
    testimony: "Their HR solutions have revolutionized our recruitment process, enhancing employee engagement and streamlining onboarding."
  }
];

const Testimonial: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    if (currentSlide < Math.ceil(testimonials.length / itemsPerSlide) - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentTestimonials = testimonials.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
            <p className="text-gray-700">{testimonial.testimony}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={prevSlide}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          disabled={currentSlide === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          disabled={currentSlide >= Math.ceil(testimonials.length / itemsPerSlide) - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
