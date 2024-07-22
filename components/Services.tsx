import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faCheckSquare, faBriefcase, faChartBar, faGavel } from '@fortawesome/free-solid-svg-icons';

interface Service {
  icon: any; 
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: faCogs,
      title: 'Digital Engineering',
      description: 'Innovative digital products and solutions tailored to your industry\'s unique requirements, driving transformation through cutting-edge technologies.',
    },
    {
      icon: faCloud,
      title: 'Cloud & DevOps',
      description: 'Seamless cloud migration, infrastructure setup, and DevOps practices for optimal performance, scalability, and security of your applications.',
    },
    {
      icon: faCheckSquare,
      title: 'Quality Assurance',
      description: 'Comprehensive manual and automated testing strategies to ensure the highest quality software, optimizing for performance and reliability.',
    },
    {
      icon: faBriefcase,
      title: 'Consulting & Strategy',
      description: 'C-Suite consulting and advisory to align your technology strategy with business objectives, unlocking new growth opportunities through digital transformation.',
    },
    {
      icon: faChartBar,
      title: 'Data Engineering',
      description: 'Secure and scalable data management solutions, from intelligent data ingestion to advanced analytics and AI-powered business insights, empowering data-driven decision-making.',
    },
    {
      icon: faGavel,
      title: 'Regulatory and Compliance',
      description: 'Expertise in achieving and maintaining industry-specific certifications and standards, ensuring your organization\'s compliance and mitigating regulatory risks.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-md group hover:shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-blue-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 "></div>
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={service.icon} className="text-4xl text-white" />
                  </div>
                  <h6 className="text-xl font-semibold mb-2 text-white">{service.title}</h6>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
