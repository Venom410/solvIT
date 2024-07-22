"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const [sending, setSending] = useState(false);

  return (
    <div>
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Have questions or want to get in touch? Reach out to us!</p>
        </div>
      </div>

      <div className="py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg mb-8 shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <ContactForm />
          </div>

          {/* FAQ's */}
          <div className="p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4">FAQ's</h2>
            <div className="text-gray-700">
              <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
              <p className="mb-4">We offer a wide range of digital services including web development, UX/UI design, data analysis, cloud computing, cybersecurity, and more.</p>
              <h3 className="text-lg font-semibold mb-2">How can I apply for a job?</h3>
              <p className="mb-4">You can apply for a job by filling out the application form on our Careers page and uploading your resume. We review applications regularly and will contact you if your profile matches our requirements.</p>
              <h3 className="text-lg font-semibold mb-2">Where is your office located?</h3>
              <p className="mb-4">Our office is located at the address mentioned in the Contact Information section below.</p>
              <h3 className="text-lg font-semibold mb-2">What is your pricing model?</h3>
              <p className="mb-4">Our pricing model varies based on the type of service and project scope. Please contact us directly for a detailed quote and more information on our pricing structure.</p>
              <h3 className="text-lg font-semibold mb-2">Do you offer customized solutions?</h3>
              <p className="mb-4">Yes, we specialize in providing tailored solutions that meet the unique needs of each client. Our team works closely with you to understand your requirements and deliver customized solutions that drive results.</p>
              <h3 className="text-lg font-semibold mb-2">How can I schedule a consultation?</h3>
              <p className="mb-4">You can schedule a consultation by filling out the contact form on this page or by calling us directly. We will arrange a convenient time to discuss your project and how we can assist you.</p>
            </div>
          </div>

          {/* Queries */}
          <div className="p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Queries</h2>
            <p className="text-gray-700">
              For more queries, feel free to reach out to us at <a href="mailto:krishgoyal101@gmail.com" className="text-blue-500">krishgoyal101@gmail.com</a> or call us at <a href="tel:+917906847088" className="text-blue-500">+91 79068 47088</a>. We are here to help you with any questions or concerns you may have.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <ul className="text-lg text-gray-700">
              <li className="flex items-center mb-4">
                <FaEnvelope className="w-6 h-6 mr-2 text-blue-500" />
                <Link href="mailto:krishgoyal101@gmail.com">krishgoyal101@gmail.com</Link>
              </li>
              <li className="flex items-center mb-4">
                <FaPhone className="w-6 h-6 mr-2 text-blue-500" />
                <Link href="tel:+917906847088">+91 79068 47088</Link>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-500" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
