import  IMgDElivery   from '../imgs/delivery.png'
import { ExternalLink, Github } from 'lucide-react';
import ImgDoacao from '../imgs/doacoesprojeto.png'
import ImgEntregador from '../imgs/Captura de tela 2024-09-20 121450.png'
import imgConsulip from '../imgs/consulta.ip.png'
import imgMoedas from '../imgs/convetemoeda.png'
import imgzcnet from '../imgs/lagzc.png'
import ImgPais from '../imgs/imgpais.png'
const projects = [
  {
    title: "PlublicExtra",
    description: "Publicaçoes de casas a venda ou aluguel, e tem chat para conversar com propietários.",
    image: IMgDElivery,
    demoLink: "https://myhouse--one.vercel.app/",
    repoLink: "https://github.com/Rauan19/myhouse1",
    technologies: ["React", "Node.js", "MongoDB", "Multer"]
  },

  {
    title: "DeliveryMan",
    description: "O cliente pode publicar entregas e os entregadores pode coletar e fazer a entrega para o local desejado.",
    image: ImgEntregador,
    demoLink: "https://sistema-delivery-tau.vercel.app",
    repoLink: "https://github.com/Rauan19/Sistema-Delivery",
    technologies: ["React", "Node.js", "PostgreSQL", "Multer"]
  },
  {
    title: "Doções",
    description: "Projeto onde vc pode doar para campanhas ou pode criar uma e fazer pagamento",
    image: ImgDoacao,
    demoLink: "https://doacoes-2024.vercel.app/",
    repoLink: "https://github.com/Rauan19/doacoes",
    technologies: ["React", "Node.js", "Mongodb"]
  }, {
    title: "Consultor de ip",
    description: "Faz consulta sobre localização do ip",
    image: imgConsulip,
    demoLink: "https://consultador-de-ip.vercel.app/",
    repoLink: "https://github.com/Rauan19/Consultar-ip",
    technologies: ["Vuejs", "Node.js", "Mongodb"]
  },
  {
    title: "Conversor de moedas",
    description: "COnverte em valores de moedas diferentes",
    image: imgMoedas,
    demoLink: "https://conversor-de-moedas-fawn.vercel.app/",
    repoLink: "https://github.com/Rauan19/Conversor-de-Moedas",
    technologies: ["Vuejs", "Node.js", "Mongodb"]
  },
  {
    title: "ZC-net provedor",
    description: "Consultar serviços e pagamento boleto ",
    image:imgzcnet ,
    demoLink: "https://zc-net.netlify.app/",
    repoLink: "https://github.com/Rauan19/leandingpage",
    technologies: ["Html", "css", "JavaScript"]
  },
  {
    title: "Busque informações sobre paises",
    description: " ",
    image: ImgPais,
    demoLink: "https://informa-oes-de-paises-zrcz.vercel.app/",
    repoLink: "https://github.com/Rauan19/Informa-oes-de-paises",
    technologies: ["Vue.js", "TypeScript"]
  }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600">
          <ExternalLink className="h-4 w-4 mr-1" /> Demo
        </a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800">
          <Github className="h-4 w-4 mr-1" /> Repo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
