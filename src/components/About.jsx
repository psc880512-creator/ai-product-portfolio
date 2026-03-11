import React from 'react';
import { Briefcase, BrainCircuit, Code, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase size={24} />,
      title: "디자인 실무 경험",
      desc: "수년간의 웹 디자인 프로젝트 스펙트럼"
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "AI 도구 활용",
      desc: "ComfyUI, ChatGPT 등을 통한 효율 및 퀄리티 향상"
    },
    {
      icon: <Code size={24} />,
      title: "프론트엔드 역량",
      desc: "React와 최신 문법 기반의 UI 구현"
    },
    {
      icon: <Sparkles size={24} />,
      title: "기획부터 시각화",
      desc: "아이디어를 실제 화면으로 연결하는 통찰력"
    }
  ];

  return (
    <section id="about" className="about-section bg-secondary">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          디자인의 심미성과 프론트엔드의 논리성, 그리고 AI의 가능성을 연결합니다.
        </p>

        <div className="about-content">
          <div className="about-text-box">
             <p className="about-bio">
              단순히 화면을 예쁘게 그리는 것을 넘어, 사용자 경험(UX)을 기획하고 최적의 기술(React)과 도구(AI)를 활용해 <strong>실제 작동하는 결과물</strong>을 만듭니다. 
             </p>
             <p className="about-bio">
              빠르게 변화하는 트렌드 속에서 문제 해결의 본질에 집중합니다.
             </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="highlight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="highlight-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
