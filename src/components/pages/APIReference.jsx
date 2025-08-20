import React from 'react';

const APIReference = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">API Reference</h1>
      <p className="text-gray-600 mb-4">
        This API reference provides detailed information on all available endpoints.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">GET /api/users</h2>
      <p className="text-gray-600 mb-2">Fetch a list of users.</p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">POST /api/login</h2>
      <p className="text-gray-600 mb-2">Authenticate a user and receive a token.</p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">PUT /api/user/:id</h2>
      <p className="text-gray-600 mb-2">Update user information.</p>
    </div>
  );
};

export default APIReference;
