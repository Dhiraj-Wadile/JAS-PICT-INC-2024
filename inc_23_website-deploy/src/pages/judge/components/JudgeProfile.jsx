import React from 'react';

const UserProfileCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h2 className="text-center text-lg font-bold mb-1">Judge Details</h2>
        <p className="text-center text-xs text-gray-600 mb-2">INC 2024</p>

        {/* User Details */}
        <div className="flex mb-2">
          <div className="w-1/2 pr-2">
            <p className="text-xs font-semibold text-gray-600">First Name:</p>
            <p className="text-sm font-medium">John</p>
          </div>

          <div className="w-1/2 pl-2">
            <p className="text-xs font-semibold text-gray-600">Last Name:</p>
            <p className="text-sm font-medium">Doe</p>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-600">Phone Number:</p>
          <p className="text-sm font-medium">123-456-7890</p>
        </div>

        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-600">Email ID:</p>
          <p className="text-sm font-medium">john.doe@example.com</p>
        </div>

        <div className="mb-2">
          <p className="text-xs font-semibold text-gray-600">Address:</p>
          <p className="text-sm font-medium">123 Main Street</p>
        </div>

        <div className="flex mb-2">
          <div className="w-1/2 pr-2">
            <p className="text-xs font-semibold text-gray-600">Pincode:</p>
            <p className="text-sm font-medium">12345</p>
          </div>

          <div className="w-1/2 pl-2">
            <p className="text-xs font-semibold text-gray-600">State:</p>
            <p className="text-sm font-medium">California</p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="w-1/2 pr-2">
            <p className="text-xs font-semibold text-gray-600">City:</p>
            <p className="text-sm font-medium">San Francisco</p>
          </div>

          <div className="w-1/2 pl-2">
            <p className="text-xs font-semibold text-gray-600">District:</p>
            <p className="text-sm font-medium">District 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
