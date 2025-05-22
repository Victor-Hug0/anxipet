// src/pages/RegisterAddress.tsx
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
const addressSchema = z.object({
  address: z.string()
    .min(1, 'Endereço é obrigatório')
    .max(100, 'Endereço muito longo'),
  number: z.string()
    .min(1, 'Número é obrigatório')
    .max(10, 'Número muito longo'),
  complement: z.string()
    .max(50, 'Complemento muito longo')
    .optional(),
  neighborhood: z.string()
    .min(1, 'Bairro é obrigatório')
    .max(50, 'Bairro muito longo'),
  city: z.string()
    .min(1, 'Cidade é obrigatória')
    .max(50, 'Cidade muito longa'),
  state: z.string()
    .min(2, 'UF deve ter 2 caracteres')
    .max(2, 'UF deve ter 2 caracteres'),
  zipCode: z.string()
    .min(8, 'CEP deve ter 8 dígitos')
    .max(9, 'CEP inválido')
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
  termsOfUse: z.literal(true, {
    errorMap: () => ({ message: 'Você deve aceitar os Termos de Uso' })
  }),
  privacyPolicy: z.literal(true, {
    errorMap: () => ({ message: 'Você deve aceitar a Política de Privacidade' })
  })
});

// Tipo inferido do schema
type AddressFormData = z.infer<typeof addressSchema>;

const RegisterAddress = () => {
  const { toast } = useToast();
  const { updateUser } = useAuth(); // Adicione esta função ao seu AuthContext
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  // Função para buscar CEP (opcional)
  const fetchZipCode = async (zipCode: string) => {
    try {
      const cleanedZipCode = zipCode.replace(/\D/g, '');
      if (cleanedZipCode.length !== 8) return;

      const response = await fetch(`https://viacep.com.br/ws/${cleanedZipCode}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const onSubmit = async (data: AddressFormData) => {
    try {
      // Aqui você faria a chamada API para salvar o endereço
      // await api.saveAddress(data);
      
      // Atualiza o usuário no contexto de autenticação
      const { address, number, complement, neighborhood, city, state, zipCode } = data;
      updateUser({
        address: {
          address,
          number,
          complement,
          neighborhood,
          city,
          state,
          zipCode,
        }
      });
      
      toast({
        title: "Endereço cadastrado com sucesso!",
        description: "Continue para registrar seu pet.",
      });
      
      navigate('/cadastro/pet');
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: error instanceof Error ? error.message : 'Ocorreu um erro ao cadastrar o endereço',
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
          {/* CEP com busca automática */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
              CEP:
            </label>
            <input
              id="zipCode"
              type="text"
              {...register('zipCode')}
              placeholder="00000-000"
              onChange={(e) => {
                const value = e.target.value;
                // Formatação do CEP
                const formattedValue = value.replace(/\D/g, '')
                  .replace(/(\d{5})(\d)/, '$1-$2')
                  .substring(0, 9);
                e.target.value = formattedValue;
                // Busca automática do CEP
                if (formattedValue.length === 9) {
                  fetchZipCode(formattedValue);
                }
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.zipCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-500">{errors.zipCode.message}</p>
            )}
          </div>

          {/* Endereço */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Endereço:
            </label>
            <input
              id="address"
              type="text"
              {...register('address')}
              placeholder="Av./Rua/Estrada"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Número e Complemento */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="number" className="block text-sm font-medium mb-2">
                Número:
              </label>
              <input
                id="number"
                type="text"
                {...register('number')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.number ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.number && (
                <p className="mt-1 text-sm text-red-500">{errors.number.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="complement" className="block text-sm font-medium mb-2">
                Complemento:
              </label>
              <input
                id="complement"
                type="text"
                {...register('complement')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Bairro */}
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
              Bairro:
            </label>
            <input
              id="neighborhood"
              type="text"
              {...register('neighborhood')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.neighborhood ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.neighborhood && (
              <p className="mt-1 text-sm text-red-500">{errors.neighborhood.message}</p>
            )}
          </div>

          {/* Cidade e Estado */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2">
                Cidade:
              </label>
              <input
                id="city"
                type="text"
                {...register('city')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-2">
                Estado (UF):
              </label>
              <input
                id="state"
                type="text"
                {...register('state')}
                maxLength={2}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.state ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Termos e Política */}
          <div className="space-y-2 pt-2">
            <div className="flex items-start">
              <input
                id="termsOfUse"
                type="checkbox"
                {...register('termsOfUse')}
                className="checkbox-custom mt-1 mr-2"
              />
              <label htmlFor="termsOfUse" className="text-xs">
                Ao clicar você concorda com nossos Termos de Uso
              </label>
            </div>
            {errors.termsOfUse && (
              <p className="text-sm text-red-500">{errors.termsOfUse.message}</p>
            )}
            
            <div className="flex items-start">
              <input
                id="privacyPolicy"
                type="checkbox"
                {...register('privacyPolicy')}
                className="checkbox-custom mt-1 mr-2"
              />
              <label htmlFor="privacyPolicy" className="text-xs">
                Ao clicar você concorda com nossa Política de Privacidade
              </label>
            </div>
            {errors.privacyPolicy && (
              <p className="text-sm text-red-500">{errors.privacyPolicy.message}</p>
            )}
          </div>
          
          {/* Botão de Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Salvando...' : 'Continuar'}
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

export default RegisterAddress;