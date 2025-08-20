import React from 'react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Support</h1>
      <p className="text-gray-600 mb-4">
        Need help? We’re here for you. Choose from the options below:
      </p>

      <ul className="space-y-4 text-gray-600">
        <li>
          📩 <strong>Email Support:</strong> <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>
        </li>
        <li>
          🧾 <strong>Knowledge Base:</strong> <a href="/docs" className="text-blue-600 underline">Browse Documentation</a>
        </li>
        <li>
          💬 <strong>Community Forum:</strong> Coming soon!
        </li>
      </ul>
    </div>
  );
};

export default Support;
