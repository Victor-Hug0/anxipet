import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

interface User {
  email: string;
  name: string;
  password: string; 
  address?: {
    address: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (newData: Partial<User>) => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to initialize auth', error);
        toast({
          title: "Erro de autenticação",
          description: "Ocorreu um erro ao carregar sua sessão",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [toast]);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await mockApiLogin(email, password);
      
      setUser(response.user);
      setToken(response.token);
      
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      toast({
        title: "Login efetuado com sucesso!",
        description: `Bem-vindo, ${response.user.name || response.user.email}!`,
      });
      
      navigate('/');
    } catch (error) {
      toast({
        title: "Erro no login",
        description: error instanceof Error ? error.message : 'Ocorreu um erro ao fazer login',
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
  try {
    setLoading(true);
    const response = await mockApiRegister(email, password, name);
    
    setUser(response.user);
    setToken(response.token);
    
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: `Bem-vindo, ${name}!`,
    });
    
    navigate('/cadastro/endereco');
  } catch (error) {
    toast({
      title: "Erro no cadastro",
      description: error instanceof Error ? error.message : 'Ocorreu um erro ao se cadastrar',
      variant: "destructive",
    });
    throw error;
  } finally {
    setLoading(false);
  }
};

  const updateUser = (newData: Partial<User>) => {
    setUser(prev => {
      if (!prev) return prev;
      
      const updatedUser = { ...prev, ...newData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate('/login');
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!token,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Funções de mock para simular chamadas API
async function mockApiLogin(email: string, password: string): Promise<{ user: User; token: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const user = users.find((u: User) => u.email === email && u.password === password);

        if (user) {
          resolve({
            user: {
                email: user.email, name: user.name,
                password: ''
            },
            token: `mock-token-${Math.random().toString(36).substr(2, 9)}`
          });
        } else {
          reject(new Error('Credenciais inválidas'));
        }
      } catch (error) {
        reject(new Error('Erro ao fazer login'));
      }
    }, 1000);
  });
}
async function mockApiRegister(email: string, password: string, name: string): Promise<{ user: User; token: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Obter usuários existentes ou array vazio
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        
        // Verificar se email já existe
        if (users.some((u: User) => u.email === email)) {
          reject(new Error('Email já cadastrado'));
          return;
        }

        // Criar novo usuário
        const newUser: User = { email, name, password };
        users.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        resolve({
          user: {
              email, name,
              password: ''
          }, 
          token: `mock-token-${Math.random().toString(36).substr(2, 9)}`
        });
      } catch (error) {
        reject(new Error('Erro ao registrar usuário'));
      }
    }, 1000);
  });
}