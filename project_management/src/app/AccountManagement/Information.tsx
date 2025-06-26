// app/account/management/page.tsx
"use client";

import { useState } from 'react';

export default function Information() {
  const [activeTab, setActiveTab] = useState('account');
  const [firstName, setFirstName] = useState('Emily');
  const [lastName, setLastName] = useState('Johnson');
  const [email, setEmail] = useState('emily.johnson@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [language, setLanguage] = useState('English (United States)');
  const [timeZone, setTimeZone] = useState('(GMT-07:00) Pacific Time');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Account Settings</h1>
        <p className="text-gray-600 mb-6">Manage your account security, subscription, and billing information</p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-6 mb-8 border-b border-gray-200">
          {['Security', 'Subscription', 'Billing', 'Account Management'].map((tab) => (
            <button
              key={tab}
              className={`pb-2 px-1 text-sm md:text-base ${activeTab === tab.toLowerCase().replace(' ', '-') ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Account Management Content */}
        {activeTab === 'account-management' && (
          <div className="space-y-8">
            {/* Account Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Profile Photo
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <span className="text-xl font-medium">{firstName.charAt(0)}{lastName.charAt(0)}</span>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800">
                        Remove photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Language & Region */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Language & Region</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>English (United States)</option>
                    <option>Español (México)</option>
                    <option>Français (Canada)</option>
                    <option>Deutsch (Deutschland)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select
                    id="timeZone"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>(GMT-07:00) Pacific Time</option>
                    <option>(GMT-06:00) Mountain Time</option>
                    <option>(GMT-05:00) Central Time</option>
                    <option>(GMT-04:00) Eastern Time</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 mb-1">
                    Date Format
                  </label>
                  <select
                    id="dateFormat"
                    value={dateFormat}
                    onChange={(e) => setDateFormat(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}