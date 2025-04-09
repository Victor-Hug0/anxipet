
import React from 'react';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const RegisterPet = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pet cadastrado com sucesso!",
      description: "Bem-vindo(a) à Anxi Pet!",
    });
    // Aqui poderia ter lógica para ir para home
    navigate('/produtos');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <BackButton />
          <div className="flex-1 flex justify-center">
            <Logo size="md" />
          </div>
        </div>
        
        <h1 className="text-xl font-bold text-center mb-6">Perfil do pet</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="petName" className="block text-sm font-medium mb-2">
              Nome:
            </label>
            <input 
              id="petName"
              type="text"
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="petType" className="block text-sm font-medium mb-2">
              Tipo:
            </label>
            <input 
              id="petType"
              type="text"
              placeholder="Ex: Cachorro, Gato, etc."
              className="input-field"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="species" className="block text-sm font-medium mb-2">
                Espécie:
              </label>
              <input 
                id="species"
                type="text"
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium mb-2">
                Idade:
              </label>
              <input 
                id="age"
                type="text"
                className="input-field"
                required
              />
            </div>
          </div>
          
          <button type="submit" className="w-full btn-primary bg-accent">
            Finalizar
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm">
          <p>
            Já possui uma conta? <a href="/login" className="link">Entrar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPet;
