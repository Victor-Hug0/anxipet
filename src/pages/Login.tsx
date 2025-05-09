
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login efetuado com sucesso!",
      description: "Redirecionando para a página inicial...",
    });
<<<<<<< HEAD
    // Aqui adicionaríamos a lógica de autenticação
=======
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center mb-8">
          <Logo size="lg" />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <input 
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Senha:
            </label>
            <input 
              id="password"
              type="password"
              placeholder="********"
              className="input-field"
              required
            />
          </div>
<<<<<<< HEAD
          
          <button type="submit" className="w-full btn-primary bg-accent">
            Entrar
          </button>
=======

          <div className="w-full btn-primary bg-[#2e3840] p-0">
            <Link to={"/"} className='block px-4 py-2 text-center'>Entrar</Link>
          </div>
          
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9
        </form>
        
        <div className="mt-4 text-center text-sm">
          <p>
            Não possui uma conta? <Link to="/cadastro" className="link">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
