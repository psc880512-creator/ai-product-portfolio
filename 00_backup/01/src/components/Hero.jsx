import React, { useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import heroImage from '../assets/hero-placeholder.png'; // Placeholder image
import profileImg from '../assets/profile.jpg'; // 사용자가 변경할 프로필 이미지 (src/assets/profile.jpg 파일을 교체하세요)

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">안녕하세요, 저는</p>
          <h1 className="hero-title">
            <span className="highlight">박순찬</span> 입니다.
          </h1>
          <h2 className="hero-subtitle">
            디자인 경험을 바탕으로 <br />
            AI 서비스와 웹을 구현하는 크리에이터
          </h2>

          <div className="hero-keywords">
            <span className="keyword">Web Design</span>
            <span className="dot">•</span>
            <span className="keyword">AI Tools</span>
            <span className="dot">•</span>
            <span className="keyword">React</span>
            <span className="dot">•</span>
            <span className="keyword">Portfolio</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기 <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              이력서 보기 <FileText size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="visual-wrapper">
            {/* 
                In a real scenario, replace this placeholder div/img with an actual photo or 
                a sleek graphic representing the user.
             */}
            <div className="image-placeholder">
              <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Decorative elements */}
            <div className="decoration-blob-1"></div>
            <div className="decoration-blob-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
