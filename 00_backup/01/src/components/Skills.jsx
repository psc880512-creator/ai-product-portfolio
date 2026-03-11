import React from 'react';
import { Palette, Layout, Bot, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design",
      icon: <Palette size={24} />,
      skills: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "UI / UX Design"
      ],
      color: "var(--primary-color)"
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ],
      color: "#10b981"
    },
    {
      title: "AI / LLM",
      icon: <Bot size={24} />,
      skills: [
        "Prompt Engineering",
        "LangChain",
        "LLM Applications",
        "ComfyUI"
      ],
      color: "#8b5cf6"
    },
    {
      title: "Data / Backend",
      icon: <Database size={24} />,
      skills: [
        "Python",
        "Pandas",
        "SQL",
        "FastAPI"
      ],
      color: "#f59e0b"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          디자인과 개발, 데이터, AI 등 전천후 스택을 바탕으로 문제를 해결합니다.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div 
                  className="skill-icon-wrapper"
                  style={{ backgroundColor: `${category.color}15`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex}>
                    <span className="skill-bullet" style={{ backgroundColor: category.color }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
