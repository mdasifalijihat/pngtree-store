import React from 'react';

const Careers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Careers</h1>
      <p className="text-gray-600 mb-4">
        We're always looking for talented individuals who are passionate about tech and innovation. Join our team and make an impact.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Open Roles</h2>
      <ul className="text-gray-600 space-y-3">
        <li>
          <strong>Frontend Developer</strong> – React, Tailwind, UX (Remote)
        </li>
        <li>
          <strong>Backend Engineer</strong> – Node.js, Express, REST APIs (Remote)
        </li>
        <li>
          <strong>Product Designer</strong> – Figma, UX Strategy (Remote)
        </li>
      </ul>

      <p className="text-gray-600 mt-6">
        📧 To apply, email us at <a href="mailto:careers@example.com" className="text-blue-600 underline">careers@example.com</a>
      </p>
    </div> 
  );
};

export default Careers;
