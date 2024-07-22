import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="mb-4 md:mb-0 font-bold text-lg text-center md:text-left">© 2024 solvIT. All rights reserved</p>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm font-bold">
          <li>
            <Link href="/terms">
              <p className="hover:underline text-blue-500">Terms</p>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <p className="hover:underline text-blue-500">Privacy</p>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <p className="hover:underline text-blue-500">Careers</p>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/krish-goyal-6524161a6/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
              <FaLinkedin className="mr-1" />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="hover:underline text-blue-500">Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
