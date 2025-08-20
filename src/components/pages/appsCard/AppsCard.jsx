import React from 'react';
import { FaStar, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppsCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="bg-white rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1 overflow-hidden"
    >
      <img
        src={app.thumbnail}
        alt={app.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 truncate">{app.name}</h3>
        <div className="flex items-center text-sm text-gray-600 space-x-3">
          <span className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            {app.rating}
          </span>
          <span className="flex items-center">
            <FaDownload className="text-gray-500 mr-1" />
            {app.downloads.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
