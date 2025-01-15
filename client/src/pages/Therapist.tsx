import React from 'react'

const Therapist = () => {
  return (
    <div>Therapist</div>
  )
}

export default Therapist

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import Footer from "../components/core/Footer";

// // Type definitions for Therapist data
// interface Therapist {
//   id: string;
//   name: string;
//   specialization: string[];
//   rating: number;
//   yearsOfExperience: number;
//   chargePerHour: number;
//   image: string;
// }

// interface TherapistDetailsResponse {
//   success: boolean;
//   data: Therapist;
// }

// const TherapistProfile = () => {
//   const { therapistId } = useParams();
//   const [therapist, setTherapist] = useState<Therapist | null>(null);
//   const [loading, setLoading] = useState<boolean>(true); // Loading state to handle async fetch

//   // Dummy availability data for now
//   const dummyAvailability = {
//     date: "2025-01-20",
//     time: "10:00 AM - 2:00 PM",
//   };

//   // Simulate fetching therapist data based on therapistId
//   useEffect(() => {
//     // Simulate async data fetch
//     const fetchTherapistData = async () => {
//       setLoading(true);
//       // Simulated fetch (replace with actual API call if needed)
//       const fetchedTherapist: Therapist = {
//         id: "5",
//         name: "Dr. John Smith",
//         specialization: ["Anxiety", "Couples", "Children"],
//         rating: 4.7,
//         yearsOfExperience: 8,
//         chargePerHour: 120,
//         image: "../assets/therapist1.jpg", // Make sure the image path is correct
//       };
//       setTherapist(fetchedTherapist);
//       setLoading(false);
//     };

//     fetchTherapistData();
//   }, [therapistId]);

//   if (loading) {
//     return <p>Loading therapist details...</p>;
//   }

//   if (!therapist) {
//     return <p>Therapist not found.</p>; // If no therapist data is available
//   }

//   return (
//     <>
//       <div className="relative w-full bg-white">
//         {/* Hero Section */}
//         <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative">
//           <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
//             <div className="relative block max-h-[30rem] lg:hidden">
//               <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
//               <img
//                 src={therapist.image}
//                 alt="therapist"
//                 className="aspect-auto w-full"
//               />
//             </div>
//             <div className="z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-blue-700">
//               <div>
//                 <p className="text-4xl font-bold text-blue-700 sm:text-[42px]">
//                   {therapist.name}
//                 </p>
//               </div>
//               <p className="text-blue-500">{`Specialization: ${therapist.specialization.join(", ")}`}</p>
//               <div className="text-md flex flex-wrap items-center gap-2">
//                 <span className="text-yellow-500">{therapist.rating}</span>
//                 <span>{`(${therapist.yearsOfExperience} years of experience)`}</span>
//                 <span>{`$${therapist.chargePerHour}/hour`}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Availability Section */}
//         <div className="mx-auto box-content px-4 text-start text-blue-700 lg:w-[1260px]">
//           <div className="my-8 p-8 border border-blue-600">
//             <p className="text-3xl font-semibold">Next Available Slot</p>
//             <div className="mt-5">
//               <p>{`Date: ${dummyAvailability.date}`}</p>
//               <p>{`Time: ${dummyAvailability.time}`}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Author Details Section */}
//       <div className="mx-auto box-content px-4 text-start text-blue-700 lg:w-[1260px]">
//         <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
//           <div className="my-8 border border-blue-500 p-8">
//             <p className="text-3xl font-semibold">About the Therapist</p>
//             <div className="mt-5">
//               <ReactMarkdown>
//                 {`Dr. John Smith has over 8 years of experience working with individuals suffering from Anxiety, Couples' issues, and Children's psychological development. He is known for his compassionate approach and expertise in cognitive behavioral therapy.`}
//               </ReactMarkdown>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default TherapistProfile;
