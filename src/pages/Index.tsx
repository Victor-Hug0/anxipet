
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redireciona automaticamente para a página de produtos
    navigate('/produtos');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Anxi Pet</h1>
        <p className="text-xl text-foreground">Carregando...</p>
      </div>
    </div>
  );
};

export default Index;
