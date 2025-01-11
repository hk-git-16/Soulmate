import React, { useState } from 'react';
import { HiUsers } from 'react-icons/hi';
import { FcRating } from "react-icons/fc";

// Define types for therapists
interface Therapist {
  heading: string;
  description: string;
  patientsTreated: number;
  rating: number;
}

const BestTherapists: Therapist[] = [
  {
    heading: "Dr. Rajesh Kumar",
    description: "Dr. Rajesh Kumar is a highly experienced clinical psychologist specializing in anxiety, depression, and stress management. With years of experience, he helps people manage mental health issues with various tools.",
    patientsTreated: 350,
    rating: 9
  },
  {
    heading: "Dr. Priya Desai",
    description: "Dr. Priya Desai specializes in cognitive-behavioral therapy (CBT) with a focus on trauma, PTSD, and relationship issues. She helps clients foster emotional healing and resilience.",    patientsTreated: 275,
    rating: 8
  },
  {
    heading: "Dr. Arvind Singh",
    description: "Dr. Arvind Singh is a renowned psychiatrist specializing in mood disorders, bipolar disorder, and schizophrenia. He provides treatment focused on stability and long-term management.",    patientsTreated: 400,
    rating: 9
  },
];

const ExploreMore: React.FC = () => {
//   const [currentTab, setCurrentTab] = useState<string>("Most Popular");

  return (
    <div>
      {/* Header Section */}
      <div className="text-4xl font-semibold text-center text-black">
        Unlock the <span className="font-bold text-fblue-200">Power Of Therapy</span>
      </div>

      <p className="text-center text-richblack-300 text-[16px] mt-3">
        Get Help, Heal, and Move Forward with Confidence
      </p>

      {/* Therapist Card Group */}
      <div className="grid grid-cols-3 gap-16 justify-center w-full items-center mb-10">
        {BestTherapists.map((therapist, index) => (
          <div key={index} className="relative mt-10">
            {/* White square */}
            <div
              className="relative z-40 flex w-[310px] h-[310px] items-start text-richblue-900
              flex-col bg-white px-5 border-[4px] border-richblack-100 shadow-md"
            >
              <div className="text-richblack-700 font-semibold text-2xl mt-4">{therapist.heading}</div>
              <div className="mt-4">{therapist.description}</div>

              <div className="absolute top-[75%] mx-auto w-[88%] h-[1px] bg-richblack-50"></div>

              <div className="flex justify-between absolute top-[82%]">
                <div className="flex flex-row items-center mr-14">
                  <HiUsers />
                  <div className="ml-2">{therapist.patientsTreated} Patients Treated</div>
                </div>

                <div className="relative flex flex-row items-center">
                  {/* Move the rating left of the text */}
                  <FcRating className="mr-4" />
                  <div className="flex items-center space-x-1 mr-2">
                    <div>{therapist.rating}</div>
                    <div>/</div>
                    <div>10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yellow square (behind) */}
            <div className="z-20 absolute w-[310px] h-[310px] bg-yellow-25 top-[4%] right-[-4%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
