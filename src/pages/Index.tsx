
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redireciona automaticamente para a página de produtos
    navigate('/produtos');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Logo size="lg" />
        </div>
        <p className="text-xl text-foreground">Carregando...</p>
      </div>
    </div>
  );
};

export default Index;
