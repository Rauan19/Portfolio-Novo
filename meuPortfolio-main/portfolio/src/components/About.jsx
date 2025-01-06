import Minhaft from '../imgs/MINHA FT.jpg'
import Curriculo from '../imgs/Curriculo_Rauan__ (2).pdf'
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Mim</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 md:flex items-center">
          <img src={Minhaft} alt="Seu Nome" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8 mx-auto md:mx-0 object-cover" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Rauan Neves</h3>
            <p className="text-gray-600 mb-4">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias web modernas, estou sempre em busca de novos desafios e oportunidades para aprender e crescer.
            </p>
            <a
              href={Curriculo}
              className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Baixar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
