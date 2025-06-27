'use client';
import React from 'react';
import Image from 'next/image';

const Setting = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-200">
      <div className="text-sm text-gray-600 mb-2">Dashboard &gt; <span className="text-gray-800 font-medium">Settings</span></div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-8">
         {/* Tabs */}
        <div className="flex flex-wrap gap-4 border-b border-gray-300 mb-6">
          {['User Profile', 'Notification Preferences', 'Display Settings', 'Integration Options'].map((tab, idx) => (
            <button
              key={idx}
              className={`pb-2 border-b-2 text-sm font-medium ${idx === 0 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-700 hover:text-gray-900'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Personal Info */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/avatar.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
            <button className="border px-3 py-1 rounded text-sm text-gray-800 hover:bg-gray-100">Change Photo</button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-800">First Name</label>
              <input type="text" defaultValue="Michael" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-800">Last Name</label>
              <input type="text" defaultValue="Anderson" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-800">Email Address</label>
              <input type="email" defaultValue="michael.anderson@example.com" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-800">Job Title</label>
              <input type="text" defaultValue="Senior Project Manager" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-800">Time Zone</label>
            <select className="w-full border rounded px-3 py-2 mt-1 text-sm text-gray-800">
              <option value="">(UTC-08:00) Pacific Time (US & Canada)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-800">Language</label>
            <select className="w-full border rounded px-3 py-2 mt-1 text-sm text-gray-800">
              <option value="">English (US)</option>
            </select>
          </div>
        </div>

        {/* Change Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-800">Current Password</label>
            <input type="password" defaultValue="********" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-800">New Password</label>
            <input type="password" defaultValue="********" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-800">Confirm New Password</label>
            <input type="password" defaultValue="********" className="w-full border rounded px-3 py-2 mt-1 text-sm placeholder:text-gray-500" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button className="border border-gray-300 text-sm px-4 py-2 rounded text-gray-800 hover:bg-gray-100">Cancel</button>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;