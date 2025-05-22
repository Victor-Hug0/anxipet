// src/components/LogoutButton.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContexts';
import { Button } from '@/components/ui/button';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Button variant="outline" onClick={logout}>
      Sair
    </Button>
  );
};

export default LogoutButton;