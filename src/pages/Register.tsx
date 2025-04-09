
import React from 'react';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { useToast } from '@/components/ui/use-toast';

const Register = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Continue para completar seu cadastro.",
    });
    // Aqui poderia ter lógica para ir para próxima etapa
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
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Nome completo:
            </label>
            <input 
              id="fullName"
              type="text"
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium mb-2">
              Data de nascimento:
            </label>
            <input 
              id="birthDate"
              type="date"
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Telefone:
            </label>
            <input 
              id="phone"
              type="tel"
              className="input-field"
              required
            />
          </div>
          
          <button type="submit" className="w-full btn-primary bg-accent">
            Continuar
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

export default Register;
