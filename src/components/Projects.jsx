import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import project1Img from '../assets/project1-placeholder.png';
import project2Img from '../assets/project2-placeholder.png';
import project3Img from '../assets/project3-placeholder.png';
import project4Img from '../assets/project4-placeholder.png';
import project5Img from '../assets/project5-placeholder.png';

const Projects = ({ onOpenModal }) => {
  const projectsData = [
    {
      id: 1,
      title: "AI 뉴스 요약 및 경제 용어 분석 서비스",
      description: "뉴스 데이터를 자동 수집하고 AI를 활용해 기사 요약과 경제 용어 분석을 제공하는 웹 서비스",
      tags: ["React", "FastAPI", "OpenAI", "Chrome Extension"],
      image: project1Img,
      link: "https://drive.google.com/file/d/1OqNb6OK5QGnZ9zQR7vd5zACY-Nx3rtWv/view?usp=sharing",
      featured: true,
      details: {
        problem: (
          <ul>
            <li>경제 뉴스는 기사 길이가 길고 전문 용어가 많아 빠르게 이해하기 어려움</li>
            <li>여러 뉴스 사이트를 직접 확인해야 하는 정보 탐색의 불편함</li>
            <li>뉴스 데이터를 자동 분석하는 서비스가 부족</li>
          </ul>
        ),
        solution: (
          <ul>
            <li>뉴스 데이터를 자동 수집하는 크롤링 파이프라인 구축</li>
            <li>AI 모델을 이용해 기사 핵심 내용을 자동 요약</li>
            <li>뉴스 본문에서 경제 키워드 추출 및 분석</li>
            <li>웹 서비스 및 크롬 익스텐션 형태로 기능 제공</li>
          </ul>
        ),
        role: (
          <ul>
            <li>AI 뉴스 요약 서비스 기획 및 전체 구조 설계</li>
            <li>뉴스 데이터 수집 및 처리 파이프라인 설계</li>
            <li>AI 요약 기능 및 경제 키워드 분석 시스템 구현</li>
            <li>웹 서비스 및 크롬 익스텐션 인터페이스 개발</li>
          </ul>
        ),
        tech: (
          <ul>
            <li>AI/NLP: OpenAI, LangChain, RAG</li>
            <li>Backend: FastAPI, Airflow</li>
            <li>Database: PostgreSQL</li>
            <li>Frontend: React</li>
            <li>Extension: Chrome Extension</li>
          </ul>
        ),
        result: (
          <ul>
            <li>뉴스 기사 자동 수집 및 AI 요약 시스템 구축</li>
            <li>경제 용어 분석 및 키워드 기반 뉴스 이해 지원</li>
            <li>웹 서비스와 브라우저 확장 프로그램 형태로 기능 제공</li>
          </ul>
        )
      }
    },
    {
      id: 2,
      title: "CCTV 기반 매장 좌석 분석 시스템",
      description: "CCTV 영상을 활용하여 매장 좌석 사용 여부와 혼잡도를 자동 분석하는 Computer Vision 시스템",
      tags: ["Python", "YOLOv8", "OpenCV", "Flask"],
      image: project2Img,
      link: "https://docs.google.com/presentation/d/1ACudzlOGjos0_7OUUDaFRYmhQOoAAeOF/edit?usp=sharing&ouid=111664726781112500164&rtpof=true&sd=true",
      featured: true,
      details: {
        problem: (
          <ul>
            <li>매장의 좌석 이용 현황을 실시간으로 파악하기 어려움</li>
            <li>좌석 사용 데이터를 수집하기 어려움</li>
            <li>매장 혼잡도를 고객에게 안내하기 어려움</li>
          </ul>
        ),
        solution: (
          <ul>
            <li>YOLO 기반 객체 인식으로 사람, 테이블, 의자 탐지</li>
            <li>객체 위치 정보를 활용한 좌석 점유 상태 분석</li>
            <li>좌석 점유율 및 혼잡도 자동 계산</li>
            <li>Flask 기반 웹 대시보드 제공</li>
          </ul>
        ),
        role: (
          <ul>
            <li>객체 인식 기반 좌석 분석 시스템 구조 설계</li>
            <li>YOLO 모델 적용 및 객체 탐지 구현</li>
            <li>좌석 점유율 계산 로직 개발</li>
            <li>웹 대시보드 개발 및 데이터 시각화</li>
          </ul>
        ),
        tech: (
          <ul>
            <li>Computer Vision: YOLOv8</li>
            <li>영상 처리: OpenCV</li>
            <li>데이터 처리: Python, Pandas</li>
            <li>웹 서비스: Flask</li>
          </ul>
        ),
        result: (
          <ul>
            <li>CCTV 기반 매장 좌석 분석 자동화</li>
            <li>좌석 이용 데이터 수집 및 혼잡도 분석 가능</li>
            <li>운영 데이터 기반 매장 관리 지원</li>
          </ul>
        )
      }
    },
    {
      id: 3,
      title: "메신저 대화 감정 · 이슈 · 약속 분석 AI 시스템",
      description: "메신저 대화 데이터를 분석하여 감정, 이슈, 약속 정보를 자동 추출하는 NLP 기반 분석 시스템",
      tags: ["Python", "NLP", "Graph RAG", "Neo4j", "OpenAI"],
      image: project3Img,
      link: "",
      featured: true,
      details: {
        problem: (
          <ul>
            <li>메신저 대화는 비정형 텍스트로 핵심 정보를 파악하기 어려움</li>
            <li>대화 속 약속이나 이슈를 따로 관리하기 어려움</li>
            <li>감정 흐름을 자동 분석하는 시스템 부족</li>
          </ul>
        ),
        solution: (
          <ul>
            <li>LLM 기반 대화 분석을 통해 감정, 이슈, 약속 정보 추출</li>
            <li>대화 데이터를 클러스터 단위로 구조화</li>
            <li>Graph RAG 기반 관계 분석 구조 적용</li>
            <li>대화 요약 및 이벤트 정보 생성</li>
          </ul>
        ),
        role: (
          <ul>
            <li>NLP 기반 대화 분석 구조 설계</li>
            <li>LLM Prompt Engineering 설계</li>
            <li>Graph RAG 데이터 모델링 설계</li>
            <li>대화 데이터 구조 및 분석 파이프라인 설계</li>
          </ul>
        ),
        tech: (
          <ul>
            <li>LLM: OpenAI GPT</li>
            <li>NLP: Prompt Engineering</li>
            <li>Graph RAG: Neo4j</li>
            <li>데이터 처리: Python, Pandas</li>
          </ul>
        ),
        result: (
          <ul>
            <li>대화 감정 분석 및 이슈 추출 시스템 구축</li>
            <li>약속 및 일정 정보 자동 추출</li>
            <li>대화 관계 기반 Graph 분석 구조 구현</li>
          </ul>
        )
      }
    },
    {
      id: 4,
      title: "AI 이미지 디자인 작업",
      description: "ComfyUI를 활용한 고효율 브랜드 이미지 에셋 제작",
      tags: ["ComfyUI", "Photoshop"],
      image: project4Img,
      link: "https://drive.google.com/file/d/1cEEQEv9mRBhmX4E-aVTK3DkWlQ5Y_nCQ/view?usp=drive_link",
      featured: false,
      details: {
        problem: "기존 스톡 이미지로는 브랜드 아이덴티티를 온전히 표현하는 데 한계가 있으며, 자체 촬영 시 비용과 시간이 과다함.",
        solution: "ComfyUI와 프롬프트 최적화를 통해 브랜드 톤앤매너에 맞는 이미지를 대량 생성 후 Photoshop으로 리터칭.",
        role: "AI 프롬프트 작성(100%), 리터칭(100%)",
        tech: "ComfyUI, Stable Diffusion, Photoshop",
        result: "이미지 에셋 제작 시간 60% 단축",
      }
    },
    {
      id: 5,
      title: "이커머스/브랜드 웹디자인 프로젝트",
      description: "전환율을 높이는 세일즈 페이지 및 브랜드사이트 디자인",
      tags: ["Figma", "HTML/CSS"],
      image: project5Img,
      featured: false,
      details: {
        problem: "사용자 이탈률이 높고 결제 페이지까지의 도달률이 저조한 기존 쇼핑몰 UI.",
        solution: "구매 여정(User Journey)을 재설계하고, 주요 CTA(Call to Action) 버튼의 시인성을 높이는 리디자인 진행.",
        role: "UI/UX 기획(100%), 디자인(100%)",
        tech: "Figma, HTML5, CSS3",
        result: "리뉴얼 후 결제 전환율 약 8% 상승, 이탈률 감소",
      }
    }
  ];

  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="projects-section bg-secondary">
      <div className="container projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          기획부터 구현, 결과까지 만들어낸 대표적인 경험들입니다.
        </p>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card featured"
              onClick={() => onOpenModal(project)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenModal(project);
                }
              }}
            >
              <div className="project-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div className="project-image placeholder-img">
                    <span className="placeholder-text">Thumbnail</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="btn-view-details">
                  상세 보기 <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="other-projects">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="project-card compact"
              onClick={() => onOpenModal(project)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenModal(project);
                }
              }}
            >
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="btn-view-details">
                  상세 보기 <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;