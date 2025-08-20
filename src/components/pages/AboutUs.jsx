import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-gray-600 mb-4">
        We are a passionate team of developers, designers, and product thinkers who love building tools that solve real-world problems. Our mission is to deliver modern, scalable solutions with simplicity at the core.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Our Vision</h2>
      <p className="text-gray-600 mb-4">
        To become a trusted platform for developers and businesses looking to streamline digital workflows through innovative technology.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Our Values</h2>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>Customer-first approach</li>
        <li>Transparency and trust</li>
        <li>Continuous learning and innovation</li>
      </ul>
    </div>
  );  
};

export default AboutUs;
