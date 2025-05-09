
import React from 'react';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

// Mock de dados de vídeos
const videosMock = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  title: `Dicas para cuidar do seu pet ${index + 1}`,
  thumbnail: "public/lovable-uploads/7b25dd41-b19e-45c3-aeb0-0175d0c1168e.png",
  views: Math.floor(Math.random() * 10000)
}));

const AnxiFilma = () => {
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
      
      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-center">AnxiFilma</h1>
          <p className="text-center text-sm text-muted-foreground">Vídeos informativos sobre cuidados com pets</p>
        </div>
        
        {/* Featured Video */}
        <div className="bg-card rounded-lg overflow-hidden mb-6">
          <video
            controls
<<<<<<< HEAD
            className="w-full h-auto"
            poster="public/lovable-uploads/7b25dd41-b19e-45c3-aeb0-0175d0c1168e.png"
=======
            className="w-full h-[720px]"
            poster="public/placeholder.svg"
>>>>>>> e1c5dfecdf0afac2e0c16496cd3f3d2a92177dd9
          >
            <source src="" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="p-3">
            <h2 className="font-medium">Como cuidar do pelo do seu pet</h2>
            <p className="text-xs text-muted-foreground">1.2k visualizações</p>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <button className="btn-primary text-xs whitespace-nowrap">Todos</button>
          <button className="btn-secondary text-xs whitespace-nowrap">Cachorros</button>
          <button className="btn-secondary text-xs whitespace-nowrap">Gatos</button>
          <button className="btn-secondary text-xs whitespace-nowrap">Alimentação</button>
          <button className="btn-secondary text-xs whitespace-nowrap">Saúde</button>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-2 gap-4">
          {videosMock.map(video => (
            <div key={video.id} className="bg-card rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-xs font-medium line-clamp-2">{video.title}</h3>
                <p className="text-xs text-muted-foreground">{video.views} visualizações</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-background p-4 border-t border-border">
        <div className="flex items-center justify-center">
          <Logo size="sm" />
        </div>
      </footer>
    </div>
  );
};

export default AnxiFilma;
