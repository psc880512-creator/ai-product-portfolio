import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ChevronLeft, ChevronRight, Grid } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState(null);

  useEffect(() => {
    setSelectedImgIdx(null);
  }, [project]);

  if (!project) return null;

  // Generate 120 placeholder images (Newest first)
  const isImageProject = project.id === 4;
  const galleryImages = isImageProject ? Array.from({ length: 120 }, (_, i) => ({
    id: 120 - i,
    url: '',
    title: `Asset #${120 - i}`
  })) : [];

  const handleNext = () => {
    if (selectedImgIdx < galleryImages.length - 1) setSelectedImgIdx(selectedImgIdx + 1);
  };

  const handlePrev = () => {
    if (selectedImgIdx > 0) setSelectedImgIdx(selectedImgIdx - 1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.description}</p>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-link"
            >
              프로젝트 보러가기
            </a>
          ) : (
            <button className="btn-project-link disabled" disabled>
              준비중
            </button>
          )}
        </div>

        <div className="modal-body">
          {project.id === 4 ? (
            /* Gallery Layout for ID 4 (AI Image Design) */
            <div className="modal-gallery-container">
              {selectedImgIdx === null ? (
                <>
                  <div className="gallery-header">
                    <h3><CheckCircle size={18} className="detail-icon" /> AI 생성 및 리터칭 에셋 갤러리 (총 {galleryImages.length}개)</h3>
                    <p>최신 작업물부터 정렬되어 있습니다. 썸네일을 클릭하면 크게 볼 수 있으며 슬라이드로 넘겨볼 수 있습니다.</p>
                  </div>
                  <div className="gallery-grid">
                    {galleryImages.map((img, idx) => (
                      <div
                        key={img.id}
                        className="gallery-item placeholder-img cursor-pointer"
                        onClick={() => setSelectedImgIdx(idx)}
                      >
                        <span className="placeholder-text">{img.title}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="gallery-slider-view">
                  <div className="slider-header">
                    <button className="btn-back-gallery" onClick={() => setSelectedImgIdx(null)}>
                      <Grid size={18} /> 전체 목록
                    </button>
                    <span className="slider-counter">
                      {selectedImgIdx + 1} / {galleryImages.length}
                    </span>
                  </div>
                  <div className="slider-container">
                    <button
                      className="slider-btn prev-btn"
                      onClick={handlePrev}
                      disabled={selectedImgIdx === 0}
                    >
                      <ChevronLeft size={32} />
                    </button>

                    <div className="slider-image-wrapper placeholder-img">
                      <span className="placeholder-text text-large">{galleryImages[selectedImgIdx].title}</span>
                    </div>

                    <button
                      className="slider-btn next-btn"
                      onClick={handleNext}
                      disabled={selectedImgIdx === galleryImages.length - 1}
                    >
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>
              )}

              <div className="gallery-details mt-4">
                <div className="detail-section full-width">
                  <h3><CheckCircle size={18} className="detail-icon" /> 결과/성과</h3>
                  <p className="highlight-text">{project.details.result}</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Image Area */}
              <div className="modal-image-container">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="modal-image"
                  />
                ) : (
                  <div className="modal-image placeholder-img">
                    <span className="placeholder-text">Project Screenshot / Demo</span>
                  </div>
                )}
              </div>

              {/* Details Area */}
              <div className="modal-details-grid">
                <div className="detail-section">
                  <h3><CheckCircle size={18} className="detail-icon" /> 문제 정의</h3>
                  <p>{project.details.problem}</p>
                </div>
                <div className="detail-section">
                  <h3><CheckCircle size={18} className="detail-icon" /> 해결 방법</h3>
                  <p>{project.details.solution}</p>
                </div>
                <div className="detail-section">
                  <h3><CheckCircle size={18} className="detail-icon" /> 본인 역할</h3>
                  <p>{project.details.role}</p>
                </div>
                <div className="detail-section">
                  <h3><CheckCircle size={18} className="detail-icon" /> 사용 기술</h3>
                  <p>{project.details.tech}</p>
                </div>
                <div className="detail-section full-width">
                  <h3><CheckCircle size={18} className="detail-icon" /> 결과/성과</h3>
                  <p className="highlight-text">{project.details.result}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;