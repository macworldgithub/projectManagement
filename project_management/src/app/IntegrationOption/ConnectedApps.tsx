// 'use client';

// import { useState, ReactNode } from 'react';
// import { Switch } from '@headlessui/react';
// import {
//   Slack,
//   CalendarDays,
//   Github,
//   AppWindow,
//   MessageSquare,
// } from 'lucide-react';

// interface Integration {
//   name: string;
//   description: string;
//   icon: ReactNode;
//   enabled: boolean;
// }

// const integrationsData: Integration[] = [
//   {
//     name: 'Slack',
//     description: 'Receive notifications and updates in Slack',
//     icon: <Slack className="text-indigo-600 w-6 h-6" />,
//     enabled: true,
//   },
//   {
//     name: 'Google Calendar',
//     description: 'Sync tasks and deadlines with Google Calendar',
//     icon: <CalendarDays className="text-red-500 w-6 h-6" />,
//     enabled: true,
//   },
//   {
//     name: 'Microsoft Teams',
//     description: 'Collaborate and receive notifications in Teams',
//     icon: <MicrosoftTeams className="text-purple-500 w-6 h-6" />,
//     enabled: false,
//   },
//   {
//     name: 'GitHub',
//     description: 'Link tasks to GitHub issues and pull requests',
//     icon: <Github className="text-gray-800 w-6 h-6" />,
//     enabled: true,
//   },
//   {
//     name: 'Dropbox',
//     description: 'Attach files from Dropbox to tasks',
//     icon: <Dropbox className="text-blue-500 w-6 h-6" />,
//     enabled: false,
//   },
// ]

// export default function ConnectedApps() {
//   const [integrations, setIntegrations] = useState(integrationsData)

//   const toggleIntegration = (index: number) => {
//     const updated = [...integrations]
//     updated[index].enabled = !updated[index].enabled
//     setIntegrations(updated)
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
//         <div className="border-b pb-4 mb-4 flex flex-wrap gap-4 text-sm font-medium text-gray-600">
//           <button className="hover:text-black">User Profile</button>
//           <button className="hover:text-black">Notification Preferences</button>
//           <button className="hover:text-black">Display Settings</button>
//           <button className="text-black border-b-2 border-blue-600">Integration Options</button>
//         </div>

//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Connected Apps</h2>

//         <div className="space-y-4">
//           {integrations.map((integration, idx) => (
//             <div
//               key={integration.name}
//               className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="bg-gray-200 p-2 rounded-xl">{integration.icon}</div>
//                 <div>
//                   <h3 className="text-base font-semibold">{integration.name}</h3>
//                   <p className="text-sm text-gray-500">{integration.description}</p>
//                 </div>
//               </div>
//               <Switch
//                 checked={integration.enabled}
//                 onChange={() => toggleIntegration(idx)}
//                 className={`${integration.enabled ? 'bg-indigo-600' : 'bg-gray-300'}
//                   relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
//               >
//                 <span
//                   className={`${
//                     integration.enabled ? 'translate-x-6' : 'translate-x-1'
//                   } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//                 />
//               </Switch>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
