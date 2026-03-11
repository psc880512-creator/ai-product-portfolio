import React from 'react';
import { Mail, Github, BookOpen } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section bg-secondary">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          함께 만들고 싶은 재미있는 프로젝트가 있다면 언제든 연락 주세요.
        </p>

        <div className="contact-content">
          <div className="contact-links">
            <a href="mailto:example@email.com" className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <p>example@email.com</p>
            </a>

            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <Github size={24} />
              </div>
              <h3>GitHub</h3>
              <p>@example</p>
            </a>

            <a href="https://notion.so/example" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <BookOpen size={24} />
              </div>
              <h3>Resume / Notion</h3>
              <p>상세 이력서 보기</p>
            </a>
          </div>

          <div className="contact-message">
             <h3>Let's build something great together.</h3>
             <a href="mailto:example@email.com" className="btn btn-primary btn-lg">
                메시지 보내기
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
