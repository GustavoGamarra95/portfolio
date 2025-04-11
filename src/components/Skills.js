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

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <section className="w-full pt-36 mt-32 px-4 sm:px-2">
      <div className="flex items-center space-x-4 sm:justify-center sm:pb-12">
        <h2 className="font-bold text-7xl text-start md:text-6xl xs:text-5xl sm:!text-4xl">Habilidaes</h2>
        <span className="xs:hidden h-[3px] w-40 bg-primary dark:bg-primaryDark transition-all duration-300 group-hover:w-52 md:w-32 sm:w-24" />
      </div>

      <div className="mt-12 overflow-x-auto">
        <div className="flex space-x-6 min-w-full">
          {skills.map((category) => {
            const chunks = chunkArray(category.items, 5); 
            return (
              <div
                key={category.title}
                className="flex flex-col min-w-[280px] bg-light dark:bg-dark p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">{category.title}</h3>
                <div className="flex space-x-4">
                  {chunks.map((chunk, i) => (
                    <ul key={i} className="space-y-3">
                      {chunk.map((skill) => (
                        <li key={skill.name} className="flex items-center space-x-3 text-lg dark:text-white">
                          <span className="text-2xl">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
