import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#sobre" className="hover:text-gray-300">Sobre</a>
          <a href="#projetos" className="hover:text-gray-300">Projetos</a>
          <a href="#habilidades" className="hover:text-gray-300">Habilidades</a>
          <a href="#contato" className="hover:text-gray-300">Contato</a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="bg-gray-800 p-4 flex flex-col space-y-2 md:hidden">
          <a href="#sobre" className="hover:text-gray-300" onClick={toggleMenu}>Sobre</a>
          <a href="#projetos" className="hover:text-gray-300" onClick={toggleMenu}>Projetos</a>
          <a href="#habilidades" className="hover:text-gray-300" onClick={toggleMenu}>Habilidades</a>
          <a href="#contato" className="hover:text-gray-300" onClick={toggleMenu}>Contato</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
