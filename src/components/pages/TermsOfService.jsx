import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>

      <p className="text-gray-600 mb-4">
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website or services.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4">
        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. Use of Service</h2>
      <p className="text-gray-600 mb-4">
        You agree to use the service only for lawful purposes. You must not violate any applicable laws or regulations.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Modifications</h2>
      <p className="text-gray-600 mb-4">
        We reserve the right to update or modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Contact</h2>
      <p className="text-gray-600">
        If you have any questions about these Terms, please contact us at <a href="/contact" className="text-blue-600 underline">our contact page</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
