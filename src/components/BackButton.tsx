
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="p-2 text-[#2e3840] hover:text-[#676058] transition-colors"
      aria-label="Voltar"
    >
      <ArrowLeft size={20} />
    </button>
  );
};

export default BackButton;
