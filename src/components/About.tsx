
import React, { useState } from 'react';
import { Code, Palette, GraduationCap } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'UI/UX', level: 90, icon: '🎨' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'JavaScript', level: 88, icon: '🚀' },
    { name: 'Node.js', level: 80, icon: '🔧' },
    { name: 'Photoshop', level: 92, icon: '🖼️' },
    { name: 'Figma', level: 95, icon: '🎯' }
  ];

  const experience = [
    { title: 'Fullstack Developer', company: 'Freelance', year: '2023-Present' },
    { title: 'UI/UX Designer', company: 'Local Agency', year: '2022-2023' },
    { title: 'Web Designer', company: 'Startup', year: '2021-2022' }
  ];

  const education = [
    { degree: 'BCIS', school: 'CCT College', year: '2021-Present' },
    { degree: 'High School', school: 'Local School', year: '2019-2021' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden border-4 border-pink-500/30 shadow-2xl shadow-pink-500/20 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/69fac0c8-9676-40a3-b29c-03c031765257.png" 
                alt="Suman Tachamo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Code className="text-white" size={32} />
            </div>
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-pink-500">Me</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Hello, My name is Suman Tachamo and I am a student studying BCIS from CCT college. 
              Currently learning fullstack and have good knowledge of UI/UX. I'm passionate about 
              creating beautiful, functional, and user-friendly digital experiences.
            </p>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              {[
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'experience', label: 'Experience', icon: Palette },
                { id: 'education', label: 'Education', icon: GraduationCap }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === id 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              {activeTab === 'skills' && (
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center space-x-2">
                          <span>{skill.icon}</span>
                          <span className="text-white">{skill.name}</span>
                        </span>
                        <span className="text-pink-500 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-pink-500 pl-4 hover:bg-gray-800/50 p-3 rounded transition-colors duration-300">
                      <h3 className="text-white font-semibold">{exp.title}</h3>
                      <p className="text-pink-400">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.year}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-pink-500 pl-4 hover:bg-gray-800/50 p-3 rounded transition-colors duration-300">
                      <h3 className="text-white font-semibold">{edu.degree}</h3>
                      <p className="text-pink-400">{edu.school}</p>
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
