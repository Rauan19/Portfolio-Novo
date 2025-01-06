
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Rauan Neves. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/Rauan19" className="hover:text-gray-300 transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="www.linkedin.com/in/rauan-neves" className="hover:text-gray-300 transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
