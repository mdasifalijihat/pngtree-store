import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-4">
        We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="w-full mt-1 px-4 py-2 border rounded-md" placeholder="Your name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full mt-1 px-4 py-2 border rounded-md" placeholder="you@example.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="w-full mt-1 px-4 py-2 border rounded-md" rows="5" placeholder="Your message here..." />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>  
      </form>
    </div>
  );
};

export default Contact;
