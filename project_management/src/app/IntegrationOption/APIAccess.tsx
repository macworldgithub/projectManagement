// 'use client'

// import { useState } from 'react'
// import { Copy, Pencil, Trash2 } from 'lucide-react'

// const Webhooks = [
//   {
//     url: 'https://example.com/webhook/tasks',
//     label: 'Task updates',
//   },
//   {
//     url: 'https://example.com/webhook/projects',
//     label: 'Project updates',
//   },
// ]

// export default function APIAccess() {
//   const [apiKey] = useState('sk_live_51Jd82kFjg5tgdKIM92AaB7cD')

//   const handleCopy = async () => {
//     await navigator.clipboard.writeText(apiKey)
//     alert('API Key copied to clipboard!')
//   }

//   return (
//     <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
//       <div className="max-w-3xl mx-auto bg-white shadow rounded-2xl p-6 md:p-8">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">API Access</h2>

//         {/* API Key Section */}
//         <div className="mb-8">
//           <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               readOnly
//               value={apiKey}
//               className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-700 text-sm font-mono"
//             />
//             <button
//               onClick={handleCopy}
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm flex items-center gap-1"
//             >
//               <Copy size={16} />
//               Copy
//             </button>
//           </div>
//           <p className="text-xs text-gray-500 mt-1">
//             Your API key provides full access to your account. Keep it secure!
//           </p>
//         </div>

//         {/* Webhooks Section */}
//         <div>
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-base font-medium text-gray-800">Webhook URLs</h3>
//             <button className="text-sm text-indigo-600 hover:underline">+ Add New</button>
//           </div>

//           <div className="space-y-3">
//             {Webhooks.map((webhook, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
//               >
//                 <div>
//                   <p className="text-sm font-medium text-gray-800">{webhook.url}</p>
//                   <p className="text-xs text-gray-500">{webhook.label}</p>
//                 </div>
//                 <div className="flex items-center gap-3 mt-2 sm:mt-0">
//                   <Pencil
//                     className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer"
//                     title="Edit"
//                   />
//                   <Trash2
//                     className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer"
//                     title="Delete"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
