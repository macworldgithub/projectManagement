'use client';

import React from 'react';

const NotificationPre = () => {
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
              className={`pb-2 border-b-2 text-sm font-medium ${idx === 1 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-700 hover:text-gray-900'}`}
            >
              {tab}
            </button>
          ))}
        </div>


        {/* Email Notifications */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h2>
          {[
            'Project Updates',
            'Task Assignments',
            'Risk Alerts',
            'Weekly Summaries'
          ].map((label, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-100 rounded px-4 py-3 mb-3">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{label}</h3>
                <p className="text-sm text-gray-700">{`Receive ${label.toLowerCase()}`}</p>
              </div>
              <input type="checkbox" defaultChecked={label !== 'Weekly Summaries'} className="w-5 h-5 text-blue-600" />
            </div>
          ))}
        </div>

        {/* Push Notifications */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h2>
          {[
            'Task Reminders',
            'Comments & Mentions',
            'AI Insights'
          ].map((label, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-100 rounded px-4 py-3 mb-3">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{label}</h3>
                <p className="text-sm text-gray-700">{`Receive push notifications for ${label.toLowerCase()}`}</p>
              </div>
              <input type="checkbox" defaultChecked={label !== 'AI Insights'} className="w-5 h-5 text-blue-600" />
            </div>
          ))}
        </div>

        {/* Notification Schedule */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Schedule</h2>
          <div className="bg-gray-100 rounded p-4 space-y-4">
            <p className="text-sm text-gray-700">During quiet hours, you’ll only receive notifications for high-priority items</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800">Start Time</label>
                <input type="time" defaultValue="20:00" className="w-full border rounded px-3 py-2 mt-1 text-sm text-gray-800" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">End Time</label>
                <input type="time" defaultValue="08:00" className="w-full border rounded px-3 py-2 mt-1 text-sm text-gray-800" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Active Days</label>
              <div className="flex flex-wrap gap-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
                  <label key={idx} className="flex items-center space-x-2 text-sm text-gray-800">
                    <input type="checkbox" defaultChecked={idx < 4} className="accent-blue-600" />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>
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

export default NotificationPre;
