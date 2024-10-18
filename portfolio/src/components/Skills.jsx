

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "JavaScript", level: 95 },
  {name: "Docker", level: 50},
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },

  { name: "Git", level: 88 },
];

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-700">{skill}</span>
      <span className="text-sm font-medium text-gray-700">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-red-500 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Minhas Habilidades</h2>
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
