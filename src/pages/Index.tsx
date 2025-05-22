
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Star, Package, ShoppingBag } from 'lucide-react';
import Logo from '@/components/Logo';
import { useAuth } from '../contexts/AuthContexts';
import LogoutButton from '../components/LogoutButton';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import img1 from '../assets/images/07dbf7e6-8ea8-4f2f-a4a2-0812b188372e.png';
import img2 from '../assets/images/4b4e868a-ef5b-482f-abf3-2fbc1458fdcd.png';
import img3 from '../assets/images/63db2c7b-d951-4b2e-8ea6-c59e93ed603a.png';
import img4 from '../assets/images/b30df7f8-b7ab-4d23-bda0-6c56fbbc3e9c.png';

const images = [img1, img2, img3, img4];

// Mock de dados de produtos
const featuredProducts = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 1,
  name: `Ração Premium Cães ${index + 1}`,
  price: 89.9 + index * 10,
  rating: 4.5,
  image: images[index],
  category: index % 2 === 0 ? 'cachorro' : 'gato',
}));

// Mock de dados de vídeos
const featuredVideos = [
  {
    id: 1,
    title: 'Como escolher a melhor ração para seu pet',
    thumbnail: "public/7b25dd41-b19e-45c3-aeb0-0175d0c1168e.png",
    duration: '5:23',
  },
  {
    id: 2,
    title: 'Dicas de cuidados para filhotes',
    thumbnail: "public/7b25dd41-b19e-45c3-aeb0-0175d0c1168e.png",
    duration: '4:15',
  },
];

// Mock de dados de assinaturas
const subscriptionPlans = [
  {
    id: 1,
    name: 'Plano Básico',
    price: 49.90,
    description: 'Ração mensal para seu pet',
    features: ['1 saco de ração por mês', 'Entrega grátis', '10% de desconto em produtos'],
  },
  {
    id: 2,
    name: 'Plano Premium',
    price: 89.90,
    description: 'Ração e petiscos para seu pet',
    features: ['1 saco de ração por mês', '2 pacotes de petiscos', 'Entrega grátis', '15% de desconto em produtos'],
  },
  {
    id: 3,
    name: 'Plano Completo',
    price: 129.90,
    description: 'Pacote completo para seu pet',
    features: ['1 saco de ração premium por mês', '3 pacotes de petiscos', '1 brinquedo mensal', 'Entrega prioritária', '20% de desconto em produtos'],
  },
];

const Index = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background p-4 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          
          <div className="flex gap-2 items-center">
            {isAuthenticated ? (
              <LogoutButton />
            ) : (
              <>
                <Link to="/login" className="text-xs text-primary hover:text-primary/80">Login</Link>
                <div className="h-4 border-l border-primary/40 mx-1"></div>
                <Link to="/cadastro" className="text-xs text-primary hover:text-primary/80">Cadastro</Link>
              </>
            )}
          </div>
        </div>
    
    <div className="mt-4 relative">
      <input
        type="search"
        placeholder="Buscar produtos..."
        className="w-full input-field pl-10"
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  </header>

      {/* Hero Section */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Tudo para o seu melhor amigo</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Produtos de qualidade para garantir a saúde e felicidade do seu pet, com entrega rápida e o melhor preço do mercado.</p>
          <Button size="lg" className="bg-primary text-white font-medium hover:bg-primary/90">
            Conheça nossos produtos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
            <Link to="/produtos" className="flex items-center text-primary hover:text-primary/80">
              Ver todos <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <Link to={`/produto/${product.id}`} key={product.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-4 bg-white/5 flex items-center justify-center h-40">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
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

          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/produtos">Ver todos os produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AnxiFilma Videos */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">AnxiFilma</h2>
            <Link to="/anxifilma" className="flex items-center text-primary hover:text-primary/80">
              Ver mais <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredVideos.map(video => (
              <div key={video.id} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/90 rounded-full p-3 cursor-pointer hover:bg-primary transition-colors">
                      <Play className="text-white" size={24} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Planos de Assinatura</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">Receba produtos para o seu pet todo mês com descontos exclusivos</p>
          
          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {subscriptionPlans.map(plan => (
                  <CarouselItem key={plan.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="text-3xl font-bold mb-4">
                          R$ {plan.price.toFixed(2).replace('.', ',')}
                          <span className="text-sm font-normal text-muted-foreground">/mês</span>
                        </div>
                        <ul className="space-y-2 text-sm">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Package className="mr-2 h-4 w-4" /> Assinar
                        </Button>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <CarouselPrevious className="relative left-0" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <CarouselNext className="relative right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Sobre nós</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Quem somos</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Nossa história</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Trabalhe conosco</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ajuda</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Central de ajuda</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Como comprar</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Prazo de entrega</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Trocas e devoluções</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">AnxiFilma</h3>
              <ul className="space-y-2">
                <li><Link to="/anxifilma" className="text-sm text-muted-foreground hover:text-primary">Conheça o canal</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Episódios recentes</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary">Parcerias</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  contato@anxipet.com
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  (11) 99999-9999
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Siga-nos</h4>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Meios de pagamento:</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-10 h-6 bg-secondary rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
              </div>
              <div className="w-10 h-6 bg-secondary rounded"></div>
              <div className="w-10 h-6 bg-secondary rounded"></div>
              <div className="w-10 h-6 bg-secondary rounded"></div>
              <div className="w-10 h-6 bg-secondary rounded"></div>
              <div className="w-10 h-6 bg-secondary rounded"></div>
            </div>
          </div>

          <div className="border-t border-border mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo size="sm" />
            </div>
            <p className="text-xs text-muted-foreground">
              © 2025 AnxiPet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
