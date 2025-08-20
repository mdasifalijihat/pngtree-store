import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <p className="text-gray-600 mb-4">
        This Privacy Policy describes how we collect, use, and protect your personal information when you use our service.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We collect information you provide directly to us, such as your name, email address, and any other information you submit.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. How We Use Information</h2>
      <p className="text-gray-600 mb-4">
        We use your information to provide and improve our services, communicate with you, and ensure security.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Sharing of Information</h2>
      <p className="text-gray-600 mb-4">
        We do not sell or share your personal information with third parties, except as required by law or to provide our services.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Your Rights</h2>
      <p className="text-gray-600 mb-4">
        You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">5. Contact</h2>
      <p className="text-gray-600">
        If you have questions or concerns, please contact us via <a href="/contact" className="text-blue-600 underline">our contact page</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
