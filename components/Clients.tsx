import React from 'react';
import Marquee from 'react-fast-marquee';

interface ClientsProps {}

const clientImages: string[] = [
  '/assets/client_1.jpeg',
  '/assets/client_2.jpeg',
  '/assets/client_3.jpeg',
  '/assets/client_4.jpeg',
  '/assets/client_5.jpeg'
];

const Clients: React.FC<ClientsProps> = () => {
  return (
    <div className='flex flex-wrap justify-center py-5 px-4 ml-10 mr-10'>
      <Marquee direction='right' speed={60} gradient={false}>
        {clientImages.map((image, index) => (
          <div key={index} className='bg-white rounded-md p-2 m-24 w-64 h-32 flex items-center justify-center'>
            <img src={image} alt={`Client ${index + 1}`} className='max-w-full max-h-full object-contain' />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;
