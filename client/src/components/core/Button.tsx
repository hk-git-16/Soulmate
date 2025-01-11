import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode; // Accepts React children (e.g., JSX, strings, etc.)
  active?: boolean; // Optional boolean to indicate active state
  linkto: string; // URL or path for the NavLink
}

const Button: React.FC<ButtonProps> = ({ children, active = false, linkto }) => {
  return (
    <NavLink to={linkto}>
      <div
        className={`text-center text-[14px] px-6 py-3 rounded-md font-bold
          ${active ? 'bg-yellow-50 text-black' : 'bg-fblue-200 text-white'}
          hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </NavLink>
  );
};

export default Button;
