'use client';

import React, { useState } from 'react';
// import { cn } from '@/lib/utils'; 
const Theme = () => {
  const [theme, setTheme] = useState('light');
  const [color, setColor] = useState('blue');
  const [fontSize, setFontSize] = useState(2);
  const [density, setDensity] = useState('comfortable');

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-md shadow-md p-6 sm:p-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-gray-600">Dashboard</span> &gt; <span className="font-medium">Settings</span>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex gap-4">
            {['User Profile', 'Notification Preferences', 'Display Settings', 'Integration Options'].map((tab) => (
              <button
                key={tab}
                className={cn(
                  'whitespace-nowrap border-b-2 px-2 py-2 text-sm font-medium',
                  tab === 'Display Settings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Theme Settings */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Theme Settings</h2>
          <p className="text-sm text-gray-600 mb-2">Choose your preferred theme mode</p>
          <div className="flex gap-6">
            {['light', 'dark', 'system'].map((mode) => (
              <label key={mode} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  value={mode}
                  checked={theme === mode}
                  onChange={() => setTheme(mode)}
                  className="accent-blue-600"
                />
                <span className="capitalize">{mode}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Color Scheme */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Color Scheme</h2>
          <p className="text-sm text-gray-600 mb-2">Select your preferred accent color</p>
          <div className="flex gap-4">
            {['blue', 'purple', 'green', 'amber', 'rose'].map((clr) => (
              <label key={clr} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value={clr}
                  checked={color === clr}
                  onChange={() => setColor(clr)}
                  className="accent-blue-600"
                />
                <span
                  className={`w-5 h-5 rounded-full ${
                    {
                      blue: 'bg-blue-600',
                      purple: 'bg-purple-600',
                      green: 'bg-green-600',
                      amber: 'bg-amber-500',
                      rose: 'bg-rose-600',
                    }[clr]
                  }`}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Font Size</h2>
          <p className="text-sm text-gray-600 mb-2">Adjust the text size for better readability</p>
          <div className="flex items-center gap-4">
            <span className="text-xs">A</span>
            <input
              type="range"
              min={1}
              max={3}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-1/2 accent-blue-600"
            />
            <span className="text-xl">A</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {fontSize === 2 ? 'Medium (Default)' : fontSize === 1 ? 'Small' : 'Large'}
          </p>
        </div>

        {/* Layout Density */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Layout Density</h2>
          <p className="text-sm text-gray-600 mb-2">Choose how compact you want the interface to be</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {['compact', 'comfortable', 'spacious'].map((d) => (
              <label key={d} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="density"
                  value={d}
                  checked={density === d}
                  onChange={() => setDensity(d)}
                  className="accent-blue-600"
                />
                <span className="capitalize">
                  {d} {d === 'comfortable' && '(Default)'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
