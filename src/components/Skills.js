import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython, FaDatabase,
  FaFigma, FaSketch, FaJava, FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiAdobephotoshop, SiAdobeillustrator,
  SiAdobepremierepro, SiAdobeaftereffects, SiC, SiSpringboot, SiGo
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend',
      items: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'React', icon: <FaReact className="text-sky-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'Java', icon: <FaJava className="text-red-600" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
        { name: 'Go', icon: <SiGo className="text-cyan-600" /> },
        { name: 'C', icon: <SiC className="text-gray-600" /> },
        { name: 'SQL / PL-SQL', icon: <FaDatabase className="text-purple-600" /> },
      ]
    },
    {
      title: 'Design',
      items: [
        { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
        { name: 'Sketch', icon: <FaSketch className="text-yellow-500" /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-800" /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-600" /> },
        { name: 'Premiere Pro', icon: <SiAdobepremierepro className="text-indigo-600" /> },
        { name: 'After Effects', icon: <SiAdobeaftereffects className="text-purple-700" /> },
      ]
    },
    {
      title: 'Otros',
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        {name: 'GitHub', icon: <FaGitAlt className="text-gray-600" /> },
        { name: 'Bash', icon: <SiC className="text-gray-400" /> },
      ]
    }
  ];

  return (
    <section className="w-full pt-36 mt-32 px-4 sm:px-2">
      <div className="flex items-center space-x-4 sm:justify-center sm:pb-12">
        <h2 className="font-bold text-7xl text-start md:text-6xl xs:text-5xl sm:!text-4xl">Habilidades</h2>
        <span className="xs:hidden h-[3px] w-40 bg-primary dark:bg-primaryDark transition-all duration-300 group-hover:w-52 md:w-32 sm:w-24" />
      </div>

      {/* Layout completamente vertical para todas las resoluciones */}
      <div className="mt-12 space-y-6">
        {skills.map((category) => (
          <div
            key={category.title}
            className="w-full bg-light dark:bg-dark p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 dark:text-white">{category.title}</h3>
            
            {/* Grid adaptable para las habilidades */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {category.items.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm sm:text-base dark:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
