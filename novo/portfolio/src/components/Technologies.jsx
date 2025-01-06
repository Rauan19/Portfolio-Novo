import React from 'react';

const TechIcon = ({ name, icon }) => (
  <div className="flex flex-col items-center">
    <img src={icon} alt={name} className="w-16 h-16 mb-2" />
    <span className="text-sm text-gray-600 dark:text-gray-300">{name}</span>
  </div>
);

const Technologies = () => {
  const techs = [
    { name: "React", icon: "/placeholder.svg" },
    { name: "Node.js", icon: "/placeholder.svg" },
    { name: "JavaScript", icon: "/placeholder.svg" },
    { name: "TypeScript", icon: "/placeholder.svg" },
    { name: "HTML5", icon: "/placeholder.svg" },
    { name: "CSS3", icon: "/placeholder.svg" },
    { name: "Tailwind CSS", icon: "/placeholder.svg" },
    { name: "Git", icon: "/placeholder.svg" },
  ];

  return (
    <section id="tecnologias" className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Tecnologias</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <TechIcon key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;