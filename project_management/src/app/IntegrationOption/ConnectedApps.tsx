// 'use client';

// import { useState } from 'react';
// import { FaSlack, FaGithub } from 'react-icons/fa';
// import { SiGoogledrive, SiMicrosoftteams, SiDropbox } from 'react-icons/si';

// type AppIntegration = {
//   name: string;
//   description: string;
//   icon: JSX.Element;
//   enabled: boolean;
// };

// export default function IntegrationOptions() {
//   const [integrations, setIntegrations] = useState<AppIntegration[]>([
//     {
//       name: 'Slack',
//       description: 'Receive notifications and updates in Slack',
//       icon: <FaSlack className="text-white text-xl" />,
//       enabled: true,
//     },
//     {
//       name: 'Google Calendar',
//       description: 'Sync tasks and deadlines with Google Calendar',
//       icon: <SiGoogledrive className="text-white text-xl" />,
//       enabled: true,
//     },
//     {
//       name: 'Microsoft Teams',
//       description: 'Collaborate and receive notifications in Teams',
//       icon: <SiMicrosoftteams className="text-white text-xl" />,
//       enabled: false,
//     },
//     {
//       name: 'GitHub',
//       description: 'Link tasks to GitHub issues and pull requests',
//       icon: <FaGithub className="text-white text-xl" />,
//       enabled: true,
//     },
//     {
//       name: 'Dropbox',
//       description: 'Attach files from Dropbox to tasks',
//       icon: <SiDropbox className="text-white text-xl" />,
//       enabled: false,
//     },
//   ]);

//   const toggleIntegration = (index: number) => {
//     const updated = [...integrations];
//     updated[index].enabled = !updated[index].enabled;
//     setIntegrations(updated);
//   };

//   return (
//     <div className="min-h-screen bg-gray-200 p-4 md:p-8">
//       <div className="max-w-5xl mx-auto">

//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-600 mb-2 md:mb-4">
//           <span className="hover:underline cursor-pointer">Dashboard</span> &gt; <span className="text-black">Settings</span>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
//           <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">Settings</h2>

//           {/* Tabs */}
//           <div className="flex border-b mb-6 overflow-x-auto text-black">
//             {['User Profile', 'Notification Preferences', 'Display Settings', 'Integration Options'].map((tab, index) => (
//               <button
//                 key={index}
//                 className={`whitespace-nowrap px-4 py-2 text-sm md:text-base border-b-2 ${
//                   tab === 'Integration Options'
//                     ? 'border-blue-600 text-blue-600 font-medium'
//                     : 'border-transparent text-gray-600'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Connected Apps */}
//           <div className="text-black">
//             <h3 className="text-lg font-semibold mb-4">Connected Apps</h3>
//             <div className="divide-y divide-gray-200">
//               {integrations.map((app, index) => (
//                 <div key={app.name} className="flex items-center justify-between py-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
//                       {app.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-sm md:text-base">{app.name}</h4>
//                       <p className="text-xs text-gray-500">{app.description}</p>
//                     </div>
//                   </div>

//                   <label className="inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={app.enabled}
//                       onChange={() => toggleIntegration(index)}
//                       className="sr-only peer"
//                     />
//                     <div className="w-11 h-6 bg-gray-300 peer-checked:bg-indigo-700 rounded-full relative transition-colors duration-200">
//                       <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
//                     </div>
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
