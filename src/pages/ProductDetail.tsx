
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { Heart, ShoppingCart, Info } from 'lucide-react';
import { toast } from 'sonner';

// Mock de dados de produto
const productMock = {
  id: 1,
  name: 'Ração Premium Cães Adultos',
  price: 89.90,
  rating: 4.5,
  image: '/placeholder.svg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
<<<<<<< HEAD
=======
  specialistName: 'Nome do especialista',
  specialistComment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9
  inStock: true,
  installments: 10
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product] = useState(productMock);
  
  const handleAddToCart = () => {
    toast.success('Produto adicionado ao carrinho!');
  };

  const handleBuyNow = () => {
    toast.success('Redirecionando para o checkout...');
  };
  
  const handleFavorite = () => {
    toast.success('Produto adicionado aos favoritos!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background p-4 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          <BackButton />
          
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          
          <div className="flex gap-2">
            <Link to="/login" className="text-xs text-primary hover:text-primary/80">Login</Link>
            <div className="h-4 border-l border-primary/40 mx-1"></div>
            <Link to="/cadastro" className="text-xs text-primary hover:text-primary/80">Cadastro</Link>
          </div>
        </div>
      </header>
      
      {/* Product */}
      <main className="flex-1 p-4">
        <div className="bg-card rounded-lg overflow-hidden shadow-md">
          <div className="bg-white/5 p-4 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-h-48 object-contain"
            />
          </div>
          
          <div className="p-4 space-y-4">
            <h1 className="text-lg font-bold">{product.name}</h1>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                <p className="text-xs text-muted-foreground">ou {productMock.installments}x de R$ {(product.price / productMock.installments).toFixed(2).replace('.', ',')}</p>
              </div>
              <button onClick={handleFavorite} className="p-2" aria-label="Adicionar aos favoritos">
                <Heart size={20} className="text-primary" />
              </button>
            </div>
            
            <div className="flex gap-2">
              <button onClick={handleBuyNow} className="flex-1 btn-primary">
                Compre agora
              </button>
              <button onClick={handleAddToCart} className="btn-secondary">
                <ShoppingCart size={18} />
              </button>
            </div>
            
            <div>
              <h2 className="text-sm font-medium mb-2">Descrição</h2>
              <p className="text-xs text-muted-foreground">{product.description}</p>
            </div>
            
            <div>
              <h2 className="text-sm font-medium mb-2">Composição de ingredientes</h2>
              <p className="text-xs text-muted-foreground">{product.ingredients}</p>
            </div>
<<<<<<< HEAD
=======

            <div>
              <h2 className="text-sm font-medium mb-2">Comentário de especialista</h2>
              <h2 className="text-sm font-medium mb-2">Nome: {product.specialistName}</h2>
              <p className="text-xs text-muted-foreground">{product.specialistComment}</p>
            </div>
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="font-medium mb-2 flex items-center">
            <Info size={16} className="inline-block mr-1" /> AnxiFilma Informa:
          </h2>
          <div className="bg-card rounded-lg overflow-hidden">
            <video
              controls
              className="w-full h-auto"
              poster="public/lovable-uploads/7b25dd41-b19e-45c3-aeb0-0175d0c1168e.png"
            >
              <source src="" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 border-t border-border pt-4">
          <div className="mb-4">
            <h3 className="text-sm mb-2">Onde estamos:</h3>
            <div className="flex gap-3">
              <a href="#" className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm mb-2">Meios de pagamento:</h3>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-secondary rounded"></div>
              <div className="w-8 h-5 bg-secondary rounded"></div>
              <div className="w-8 h-5 bg-secondary rounded"></div>
              <div className="w-8 h-5 bg-secondary rounded"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <a href="#" className="text-primary">Institucional</a>
            <a href="#" className="text-primary">Termos</a>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <a href="#" className="text-primary">AnxiFilma</a>
            <a href="#" className="text-primary">De Privacidade</a>
          </div>
          
          <div className="mt-4 flex items-center justify-center">
            <Logo size="sm" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ProductDetail;
