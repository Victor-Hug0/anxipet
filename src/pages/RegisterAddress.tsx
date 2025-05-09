
import React from 'react';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { useToast } from '@/components/ui/use-toast';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9

const RegisterAddress = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Endereço cadastrado com sucesso!",
      description: "Continue para registrar seu pet.",
    });
    // Aqui poderia ter lógica para ir para página de cadastro do pet
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
        
        <h1 className="text-xl font-bold text-center mb-6">Perfil do proprietário</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Endereço:
            </label>
            <input 
              id="address"
              type="text"
              placeholder="Av./Rua/Estrada"
              className="input-field"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="number" className="block text-sm font-medium mb-2">
                Número:
              </label>
              <input 
                id="number"
                type="text"
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                Bairro:
              </label>
              <input 
                id="neighborhood"
                type="text"
                className="input-field"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-2">
              Cidade:
            </label>
            <input 
              id="city"
              type="text"
              className="input-field"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                id="termsOfUse"
                type="checkbox"
                className="checkbox-custom mr-2"
                required
              />
              <label htmlFor="termsOfUse" className="text-xs">
                Ao clicar você concorda com nossos Termos de Uso
              </label>
            </div>
            
            <div className="flex items-center">
              <input 
                id="privacyPolicy"
                type="checkbox"
                className="checkbox-custom mr-2"
                required
              />
              <label htmlFor="privacyPolicy" className="text-xs">
                Ao clicar você concorda com nossa Política de Privacidade
              </label>
            </div>
          </div>
          
<<<<<<< HEAD
          <button type="submit" className="w-full btn-primary bg-accent">
            Continuar
          </button>
=======
          <div className="w-full btn-primary bg-[#2e3840] p-0">
            <Link to={"/cadastro/pet"} className='block px-4 py-2 text-center'>Continuar</Link>
          </div>
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9
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

export default RegisterAddress;
