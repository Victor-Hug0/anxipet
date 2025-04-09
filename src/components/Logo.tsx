
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-24',
    md: 'w-32',
    lg: 'w-40'
  };

  return (
    <Link to="/" className={`flex items-center ${sizeClasses[size]}`}>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8C16.7614 8 19 5.76142 19 3C19 5.76142 21.2386 8 24 8C21.2386 8 19 10.2386 19 13C19 10.2386 16.7614 8 14 8Z" fill="#FC8464" />
            <path d="M8 19C11.866 19 15 15.866 15 12C15 15.866 18.134 19 22 19C18.134 19 15 22.134 15 26C15 22.134 11.866 19 8 19Z" fill="#FC8464" />
          </svg>
          <div className="font-roboto font-bold text-[#2e3840]">
            <span>ANXI</span>
            <span>PET</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
