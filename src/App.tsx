import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContexts";
import ProtectedRoute from "./components/ProtectRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAddress from "./pages/RegisterAddress";
import RegisterPet from "./pages/RegisterPet";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AnxiFilma from "./pages/AnxiFilma";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            
            {/* Rotas de cadastro (protegidas, pois o usuário precisa estar logado para completar cadastro) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/cadastro/endereco" element={<RegisterAddress />} />
              <Route path="/cadastro/pet" element={<RegisterPet />} />
            </Route>
            
            {/* Rotas protegidas (apenas para usuários autenticados) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Index />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/anxifilma" element={<AnxiFilma />} />
            </Route>
            
            {/* Rota 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;