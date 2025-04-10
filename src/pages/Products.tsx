
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Filter, Star } from 'lucide-react';
import Logo from '../components/Logo';

// Mock de dados de produtos
const productsMock = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  name: `Ração Premium Cães ${index + 1}`,
  price: 89.9 + index * 10,
  rating: 4.5,
  image: '/placeholder.svg',
  category: index % 2 === 0 ? 'cachorro' : 'gato',
  brand: index % 3 === 0 ? 'AnxiPet' : 'PetPlus'
}));

const Products = () => {
  const [products] = useState(productsMock);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background p-4 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          <button className="p-2">
            <Menu size={20} className="text-primary" />
          </button>
          
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          
          <div className="flex gap-2">
            <Link to="/login" className="text-xs text-primary hover:text-primary/80">Login</Link>
            <div className="h-4 border-l border-primary/40 mx-1"></div>
            <Link to="/cadastro" className="text-xs text-primary hover:text-primary/80">Cadastro</Link>
          </div>
        </div>
        
        <div className="mt-4 relative">
          <input
            type="search"
            placeholder="Buscar produtos..."
            className="w-full input-field pl-10"
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
          </button>
        </div>
      </header>
      
      {/* Filters */}
      {showFilters && (
        <div className="bg-card p-4 border-b border-border">
          <h3 className="text-sm font-medium mb-2">Filtros</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-xs mb-2">Tipo de Animal</h4>
              <div className="flex gap-2">
                <button className="btn-secondary text-xs py-1">Cachorro</button>
                <button className="btn-secondary text-xs py-1">Gato</button>
                <button className="btn-secondary text-xs py-1">Outros</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs mb-2">Preço</h4>
              <div className="flex gap-2">
                <button className="btn-secondary text-xs py-1">Até R$50</button>
                <button className="btn-secondary text-xs py-1">R$50-R$100</button>
                <button className="btn-secondary text-xs py-1">R$100+</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs mb-2">Marca</h4>
              <div className="flex gap-2">
                <button className="btn-secondary text-xs py-1">AnxiPet</button>
                <button className="btn-secondary text-xs py-1">PetPlus</button>
                <button className="btn-secondary text-xs py-1">Outras</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Products Grid */}
      <main className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Produtos</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => (
            <Link to={`/produto/${product.id}`} key={product.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-contain p-2 bg-white/5"
              />
              <div className="p-3">
                <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <Star size={12} className="text-primary fill-primary" />
                  <span className="text-xs ml-1">{product.rating}</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-bold">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
