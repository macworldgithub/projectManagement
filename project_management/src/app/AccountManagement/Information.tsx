"use client"; 
import { useState } from 'react';
export default function Information() {
  const [activeTab, setActiveTab] = useState('Account Management');

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>
        <p className="text-gray-600 mb-8">Manage your account security, subscription, and billing information</p>

          {/* Tabs */}
         <div className="flex flex-wrap gap-2 md:gap-6 mb-8 border-b border-gray-200">
          {['Security', 'Subscription', 'Billing', 'Account Management'].map((tab) => (
            <button
              key={tab}
              className={`pb-2 px-1 text-sm md:text-base ${activeTab.toLowerCase() === tab.toLowerCase() ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div> 
        
        {/* Account Information Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <div className="p-2 bg-gray-50 rounded border border-gray-200">Emily</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <div className="p-2 bg-gray-50 rounded border border-gray-200">Johnson</div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="flex items-center">
              <div className="flex-grow p-2 bg-gray-50 rounded border border-gray-200">emily.johnson@example.com</div>
              <button className="ml-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                Remove photo
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="p-2 bg-gray-50 rounded border border-gray-200">+1 (555) 123-4567</div>
          </div>
        </div>

        {/* Language & Region Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Language & Region</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <div className="p-2 bg-gray-50 rounded border border-gray-200">English (United States)</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
              <div className="p-2 bg-gray-50 rounded border border-gray-200">(GMT-07:00) Pacific Time</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
              <div className="p-2 bg-gray-50 rounded border border-gray-200">MM/DD/YYYY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
