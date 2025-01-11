import React from 'react';

interface HighLightTextProps {
  text: string; // Define the type of 'text' prop
}

const HighLightText: React.FC<HighLightTextProps> = ({ text }) => {
  return (
    <span className="font-bold text-fblue-200">
      {/* <span className='font-bold text-richblue-200 bg-gradient-to-r from-richblue-600 to-richblue-900'> */}
      {" "} {text} {" "}
    </span>
  );
};

export default HighLightText;
