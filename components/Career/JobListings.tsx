"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface JobListing {
  _id: string;
  title: string;
  location: string;
  description: string;
  languages: string[];
  experience: string;
}

const JobListings: React.FC = () => {
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const res = await fetch('/api/jobs');
        if (!res.ok) {
          throw new Error('Failed to fetch job listings');
        }
        const data: JobListing[] = await res.json();
        setJobListings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job listings:', error);
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  if (loading) {
    return <p className="text-center mt-12 text-lg">Loading...</p>;
  }

  if (jobListings.length === 0) {
    return <p className="text-center mt-12 text-lg text-red-500">No job listings found</p>;
  }

  return (
    <div className="container mx-auto mt-8 mb-16 bg-white">
      <h2 className="text-4xl font-semibold mb-8 text-center">Job Listings</h2>
      {jobListings.map((job) => (
        <div key={job._id} className="mb-4 rounded-md overflow-hidden shadow-lg border border-gray-300">
          <div
            className="p-4 flex justify-between items-center cursor-pointer bg-blue-100"
            onClick={() => toggleExpand(job._id)}
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <span>{expanded === job._id ? '-' : '+'}</span>
          </div>
          {expanded === job._id && (
            <div className="p-4 bg-white">
              <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
              <p className="text-gray-600"><strong>Experience:</strong> {job.experience}</p>
              <p className="mt-2">{job.description}</p>
              <div className="mt-2">
                <p><strong>Languages:</strong> {job.languages.join(', ')}</p>
              </div>
              <Link
                href="mailto:krishgoyal101@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </Link>
            </div>
          )}
        </div>
      ))}
      <div className="text-center text-gray-600 mt-4 font-bold">
        <p>If you are unable to apply or have more queries, feel free to reach out to us at</p>
        <Link href="mailto:krishgoyal101@gmail.com"><p className="text-blue-500 hover:underline">krishgoyal101@gmail.com</p></Link>
        <p>or call us at <Link href="tel:+917906847088" className="text-blue-500 hover:underline">+91 79068 47088</Link>. We are here to help you with any questions or concerns you may have.</p>
      </div>
    </div>
  );
};

export default JobListings;
