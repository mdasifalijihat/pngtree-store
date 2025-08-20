import React, { useContext, useState } from "react";
import { AuthContext } from "../../../authContext/AuthContext";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [editing, setEditing] = useState(false);

  const handleUpdate = () => {
    updateUserProfile(name, photoURL)
      .then(() => {
        alert("Profile updated successfully!");
        setEditing(false);
      })
      .catch((error) => {
        console.error(error.message);
        alert("Failed to update profile.");
      });
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">My Profile</h2>

        <div className="flex justify-center mb-4">
          <img
            className="w-32 h-32 rounded-full object-cover border border-gray-300"
            src={user?.photoURL}
            alt="User"
          />
        </div>

        {!editing ? (
          <div className="text-center">
            <p className="text-lg">
              <span className="font-medium">Name:</span> {user?.displayName}
            </p>
            <p className="text-lg">
              <span className="font-medium">Email:</span> {user?.email}
            </p>
            <button
              onClick={() => setEditing(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Photo URL"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
