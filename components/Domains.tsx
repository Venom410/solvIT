import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faChartLine, faBullhorn, faShieldAlt, faHandHoldingUsd, faBriefcaseMedical, faSeedling, faSuitcase, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface Domain {
  icon: any; // Using any for FontAwesomeIcon PropType
  text: string;
  description: string;
}

const Domains: React.FC = () => {
  const domains: Domain[] = [
    { 
      icon: faCreditCard, 
      text: 'Digital Payments',
      description: 'Secure, Seamless, And Scalable Digital Payment Solutions, Enabling Frictionless Transactions And Enhanced Customer Satisfaction For Businesses.',
    },
    { 
      icon: faChartLine, 
      text: 'Equity Market',
      description: 'Intelligent Trading Systems, Advanced Market Analysis, And Tailored Investment Advisory Services To Drive Financial Success.',
    },
    { 
      icon: faBullhorn, 
      text: 'AdTech',
      description: 'Cutting-Edge Advertising Technology, Data-Driven Campaigns, And Performance Optimization To Maximize ROI And Audience Engagement.',
    },
    { 
      icon: faShieldAlt, 
      text: 'Insurance',
      description: 'Comprehensive Insurance Solutions, From Risk Assessment And Underwriting To Claims Management And Customer Experience Optimization.',
    },
    { 
      icon: faHandHoldingUsd, 
      text: 'Lending',
      description: 'Streamlined Lending Processes, Advanced Credit Risk Analysis, And Intelligent Portfolio Management To Drive Growth And Minimize Defaults.',
    },
    { 
      icon: faBriefcaseMedical, 
      text: 'Health Care',
      description: 'Pioneering Digital Health Solutions, Including Telemedicine, Data-Driven Patient Care, And Innovative Medical Technology To Improve Outcomes.',
    },
    { 
      icon: faSeedling, 
      text: 'AgriTech',
      description: 'Transformative Agricultural Technology, From Precision Farming And Supply Chain Optimization To Data-Driven Insights And Sustainable Practices.',
    },
    { 
      icon: faSuitcase, 
      text: 'Travel',
      description: 'Innovative Travel Technology, From Intelligent Booking Platforms And Revenue Management To Personalized Customer Journeys And Operational Efficiency.',
    },
    { 
      icon: faShoppingCart, 
      text: 'E-Commerce',
      description: 'Comprehensive E-Commerce Solutions, From Intuitive Online Storefronts To AI-Powered Personalization, Optimization, And Seamless Omnichannel Experiences.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-md group hover:shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-blue-500/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 "></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={domain.icon} className="text-4xl text-white" />
                </div>
                <h6 className="text-xl font-semibold mb-2 text-white">{domain.text}</h6>
                <p className="text-gray-200">{domain.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
