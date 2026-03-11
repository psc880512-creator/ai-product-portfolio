import React from 'react';
import { Target, Layers, Zap } from 'lucide-react';

const Strength = () => {
  const strengths = [
    {
      icon: <Layers size={28} />,
      title: "디자인과 구현의 동시 이해",
      desc: "디자이너의 의도를 살리면서도 프론트엔드 환경에 최적화된 마크업과 컴포넌트를 설계합니다."
    },
    {
      icon: <Zap size={28} />,
      title: "AI 툴의 실무적 연결",
      desc: "단순한 생성 AI 사용을 넘어, 프롬프트 엔지니어링을 통해 실제 프로덕트에 필요한 리소스를 빠르고 정확하게 생산합니다."
    },
    {
      icon: <Target size={28} />,
      title: "기획 의도의 시각적 정리",
      desc: "복잡한 문제나 방대한 정보를 파악하고, 사용자(사용자)가 쉽게 이해할 수 있는 직관적인 UI 구조로 시각화합니다."
    }
  ];

  return (
    <section id="strength" className="strength-section">
      <div className="container strength-container">
        <h2 className="section-title">What I Can Do</h2>
        <p className="section-subtitle">
          저를 선택해야 하는 이유
        </p>

        <div className="strength-grid">
          {strengths.map((item, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strength;
