// 'use client';

// import React from 'react';
// import { FaUser } from 'react-icons/fa';
// import { BsLock } from 'react-icons/bs';

// const customization = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-4">
//       {/* Header */}
//       <div className="text-lg md:text-xl font-semibold text-gray-800">
//         <BsLock className="inline-block mr-2 text-blue-500" />
//         AI Planning Assistant
//       </div>
//       <p className="text-sm text-gray-600">Ask questions or get recommendations about your project plan</p>

//       {/* Chat Message Box */}
//       <div className="space-y-4">
//         {/* AI Message */}
//         <div className="bg-gray-100 p-4 rounded-xl">
//           <div className="flex items-start gap-2">
//             <BsLock className="text-blue-500 mt-1" />
//             <p className="text-sm text-gray-700">
//               Based on your project requirements, I recommend the <strong>"Optimized Timeline"</strong> plan. It balances efficiency with reasonable risk levels. Would you like me to explain the key benefits?
//             </p>
//           </div>
//         </div>

//         {/* User Message */}
//         <div className="flex justify-end">
//           <div className="bg-blue-100 text-blue-900 p-4 rounded-xl max-w-md">
//             <div className="flex items-center gap-2 justify-end">
//               <p className="text-sm">Can you suggest ways to reduce the project duration without significantly increasing risk?</p>
//               <FaUser className="text-gray-500" />
//             </div>
//           </div>
//         </div>

//         {/* AI Response */}
//         <div className="bg-gray-100 p-4 rounded-xl">
//           <div className="flex items-start gap-2">
//             <BsLock className="text-blue-500 mt-1" />
//             <div>
//               <p className="text-sm text-gray-700 mb-2">To reduce project duration while managing risk, you could:</p>
//               <ul className="list-decimal text-sm text-gray-700 pl-5 space-y-1">
//                 <li>Increase task parallelization for non-dependent activities</li>
//                 <li>Add 2 more team members to critical path tasks</li>
//                 <li>Reduce the scope of lower-priority features</li>
//                 <li>Consider a phased delivery approach</li>
//               </ul>
//               <p className="text-sm text-gray-700 mt-2">
//                 I've updated the plan customization options to reflect these changes. Would you like to see the impact?
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Input Box */}
//       <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mt-4">
//         <input
//           type="text"
//           placeholder="Ask a question about your project plan..."
//           className="flex-1 px-2 py-1 text-sm outline-none"
//         />
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default customization;
