
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Olá, eu sou <span className="text-red-500">Rauan Neves</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Desenvolvedor Full Stack 
      </p>
      <a
        href="#sobre"
        className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-red-600 transition-colors duration-300"
      >
        Conheça meu trabalho
      </a>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
