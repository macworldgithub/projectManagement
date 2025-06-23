'use client';

import React from 'react';
import {
  Squares2X2Icon,
  FolderIcon,
  RectangleStackIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', icon: <Squares2X2Icon className="h-5 w-5" /> },
  { name: 'Projects', icon: <FolderIcon className="h-5 w-5" /> },
  { name: 'Kanban Board', icon: <RectangleStackIcon className="h-5 w-5" /> },
  { name: 'AI Planner', icon: <CpuChipIcon className="h-5 w-5" /> },
  { name: 'Reports', icon: <ChartBarIcon className="h-5 w-5 text-gray-400" /> },
];

const SideBar = () => {
  return (
    <aside className="bg-[#0E1422] h-max-screen w-48 p-4 hidden sm:block">
      <div className="text-white text-xl font-bold mb-8">LOGO</div>
      <nav className="space-y-4">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-2 rounded-md hover:bg-[#1a2233] text-white text-sm ${
              item.name === 'Reports' ? 'bg-[#2b2f3a] text-gray-400 cursor-not-allowed' : ''
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
