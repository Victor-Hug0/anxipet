import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '../contexts/AuthContexts';

// Esquema de validação com Zod
const registerSchema = z.object({
  fullName: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome muito longo'),
  email: z.string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(32, 'Senha muito longa'),
  birthDate: z.string()
    .min(1, 'Data de nascimento é obrigatória')
    .refine(val => {
      const date = new Date(val);
      const today = new Date();
      return date < today;
    }, 'Data de nascimento inválida'),
  phone: z.string()
    .min(11, 'Telefone deve ter 11 dígitos')
    .max(11, 'Telefone deve ter 11 dígitos')
    .regex(/^\d+$/, 'Apenas números são permitidos')
});

// Tipo inferido do schema
type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const { toast } = useToast();
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  // Formatação do telefone
  const formatPhone = (value: string) => {
    const nums = value.replace(/\D/g, '');
    return nums.substring(0, 11);
  };

  const onSubmit = async (data: RegisterFormData) => {
  try {
    await registerUser(data.email, data.password, data.fullName);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Você será redirecionado para completar seu cadastro.",
    });
    
    navigate('/cadastro/endereco');
  } catch (error) {
    toast({
      title: "Erro no cadastro",
      description: error instanceof Error ? error.message : 'Ocorreu um erro ao cadastrar',
      variant: "destructive",
    });
  }
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nome completo */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Nome completo:
            </label>
            <input
              id="fullName"
              type="text"
              {...register('fullName')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Senha:
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Data de nascimento */}
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium mb-2">
              Data de nascimento:
            </label>
            <input
              id="birthDate"
              type="date"
              {...register('birthDate')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.birthDate ? 'border-red-500' : 'border-gray-300'
              }`}
              max={new Date().toISOString().split('T')[0]}
            />
            {errors.birthDate && (
              <p className="mt-1 text-sm text-red-500">{errors.birthDate.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Telefone:
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              onChange={(e) => {
                const formatted = formatPhone(e.target.value);
                e.target.value = formatted;
                setValue('phone', formatted);
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="11999999999"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Botão de Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Cadastrando...' : 'Continuar'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            Já possui uma conta? <Link to="/login" className="text-primary hover:underline">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;