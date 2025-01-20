import React, { useState, useEffect } from 'react';
import Footer from '../components/core/Footer';
import { Link } from 'react-router-dom';

interface Therapist {
  id: string;
  name: string;
  specialization: string[];
  rating: number;
  yearsOfExperience: number;
  chargePerHour: number;
  image: string;
}

import img1 from "../assets/therapist1.jpg";
import img2 from "../assets/therapist2.jpg";
const therapistsMockData: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Jane Doe',
    specialization: ['Anxiety', 'Depression'],
    rating: 4.9,
    yearsOfExperience: 10,
    chargePerHour: 150,
    image: img1,
  },
  {
    id: '2',
    name: 'Dr. John Smith',
    specialization: ['Anxiety', 'Couples', 'Children'],
    rating: 4.8,
    yearsOfExperience: 8,
    chargePerHour: 120,
    image: img2,
  },
  {
    id: '3',
    name: 'Dr. Rita Das',
    specialization: ['Anxiety', 'Depression'],
    rating: 4.85,
    yearsOfExperience: 4,
    chargePerHour: 120,
    image: img1,
  },
  {
    id: '4',
    name: 'Dr. Kiran Talele',
    specialization: ['Anxiety', 'Children'],
    rating: 4.9,
    yearsOfExperience: 20,
    chargePerHour: 180,
    image: img2,
  },
  {
    id: '5',
    name: 'Dr. John Smith',
    specialization: ['Anxiety', 'Couples', 'Children'],
    rating: 4.7,
    yearsOfExperience: 8,
    chargePerHour: 120,
    image: '../assets/therapist1.jpg',
  },
  {
    id: '6',
    name: 'Dr. Jason Smith',
    specialization: ['Couples', 'Children'],
    rating: 4.7,
    yearsOfExperience: 8,
    chargePerHour: 120,
    image: '../assets/therapist1.jpg',
  },
  {
    id: '7',
    name: 'Dr. Johnny Smith',
    specialization: ['Couples', 'Children'],
    rating: 4.7,
    yearsOfExperience: 8,
    chargePerHour: 120,
    image: '../assets/therapist1.jpg',
  },
  {
    id: '8',
    name: 'Dr. Bartholomew Smith',
    specialization: ['Anxiety', 'Couples', 'Children'],
    rating: 4.7,
    yearsOfExperience: 8,
    chargePerHour: 120,
    image: '../assets/therapist1.jpg',
  },
  // Add more mock data as needed
];

const Therapists: React.FC = () => {
  const [activeSpecialization, setActiveSpecialization] = useState<string>('Anxiety');
  const [popularTherapists, setPopularTherapists] = useState<Therapist[]>([]);
  const [filteredTherapists, setFilteredTherapists] = useState<Therapist[]>([]);

  useEffect(() => {
    // Simulate fetching popular therapists
    setPopularTherapists(therapistsMockData);

    // Filter therapists by selected specialization
    const filtered = therapistsMockData.filter((therapist) =>
      therapist.specialization.includes(activeSpecialization)
    );
    setFilteredTherapists(filtered);
  }, [activeSpecialization]);

  return (
    <>
      {/* Hero Section */}
      <div className="box-content bg-gradient-to-l from-fblue-50/0 via-fblue-50 to-fblue-50/0 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent">
          <p className="text-3xl text-richblack-500">Find the Best Therapists</p>
          <p className="max-w-[870px] mx-auto text-richblack-200 text-xl">
            Choose from a variety of specializations and find the perfect therapist for your needs.
          </p>
        </div>
      </div>

      {/* Popular Therapists Section */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading text-richblack-500 text-3xl mb-6">Most Popular Therapists</div>
        <div className="flex justify-center space-x-4 py-4 mx-auto">
          {popularTherapists.slice(0, 4).map((therapist) => (
            <div
              key={therapist.id}
              className="flex-shrink-0 w-[16rem] h-[20rem] p-4 bg-gray-800 rounded-lg shadow-md"
            >
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <Link
                to={`/therapist/${therapist.id}`}
                className="text-xl font-bold text-blue-700 hover:underline"
              >
                {therapist.name}
              </Link>
              <p className="mt-4 text-sm text-richblue-600">{therapist.yearsOfExperience} years of experience</p>
              <p className="text-sm text-richblue-600">Rating: {therapist.rating}/5</p>
              <p className="text-sm text-richblue-600">${therapist.chargePerHour}/hour</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specializations Section */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading">Therapists by Specialization</div>
        <div className="my-4 flex space-x-4">
          {['Anxiety', 'Depression', 'Couples', 'Children'].map((specialization) => (
            <button
              key={specialization}
              className={`px-4 py-2 rounded ${
                activeSpecialization === specialization
                  ? 'bg-richblue-500 text-richblue-25'
                  : 'bg-fblue-50 text-richblue-600'
              }`}
              onClick={() => setActiveSpecialization(specialization)}
            >
              {specialization}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-1 gap-6 lg:grid-cols-4">
          {filteredTherapists.map((therapist) => (
            <div key={therapist.id} className="w-full p-4 bg-gray-800 rounded-lg shadow-md">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg text-richblue-600 mt-4">{therapist.name}</h3>
              <p className="text-sm text-richblue-600">
                {therapist.yearsOfExperience} years of experience
              </p>
              <p className="text-sm text-richblue-600">Rating: {therapist.rating}/5</p>
              <p className="text-sm text-richblue-600">${therapist.chargePerHour}/hour</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Therapists;
