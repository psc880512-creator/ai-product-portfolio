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
      description: "뉴스 기사를 자동으로 수집하고 AI를 활용해 요약 및 분석을 제공하는 웹 사이트 및 크롬 익스텐션 서비스",
      tags: ["React", "Chrome Extension", "FastAPI", "OpenAI"],
      image: project1Img,
      featured: true,
      details: {
        problem: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>뉴스 기사, 특히 경제 뉴스는 전문 용어가 많고 내용이 길어 일반 사용자가 빠르게 이해하기 어렵다는 문제가 존재한다.</p>
            <p>또한 경제 뉴스는 여러 매체에 분산되어 있어 사용자가 필요한 정보를 선별하고 이해하는 과정에 많은 시간이 소요된다.</p>
            <p>기존 뉴스 서비스의 경우 다음과 같은 한계가 존재한다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li>뉴스 기사 내용이 길어 핵심 내용을 빠르게 파악하기 어려움</li>
              <li>경제 용어가 많아 일반 사용자의 이해도가 낮음</li>
              <li>여러 뉴스 사이트를 방문해야 하는 정보 탐색 불편</li>
              <li>뉴스 데이터를 활용한 자동 분석 서비스 부족</li>
            </ul>
            <p>따라서 본 프로젝트에서는 뉴스 데이터를 자동으로 수집하고 AI를 활용하여 요약 및 분석을 제공하는 시스템을 구축하고, 사용자가 웹 브라우저에서 바로 활용할 수 있는 크롬 익스텐션 형태의 서비스를 개발하는 것을 목표로 하였다.</p>
          </div>
        ),
        solution: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서는 뉴스 자동 수집 → AI 요약 → 데이터 저장 → 사용자 서비스 제공까지의 전체 파이프라인을 구축하였다.<br/>시스템은 다음과 같은 구조로 구성된다.</p>
            <div style={{ marginLeft: "1rem" }}>
              <strong>1. 뉴스 데이터 자동 수집</strong>
              <p>Airflow 기반 스케줄링 시스템을 이용하여 뉴스 데이터를 자동 수집하도록 설계하였다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>Naver News API 활용, 뉴스 메타데이터 수집, 기사 본문 데이터 크롤링</li>
                <li>수집 데이터: 뉴스 제목, 기사 URL, 기사 본문, 뉴스 출처, 수집 시간</li>
              </ul>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>2. AI 기반 뉴스 요약 생성</strong>
              <p>수집된 뉴스 데이터를 AI 모델을 통해 자동 요약한다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>요약 과정: 기사 본문 텍스트 전처리, OpenAI 기반 AI 모델을 이용한 뉴스 요약, 핵심 문장 생성</li>
                <li>이를 통해 긴 뉴스 기사를 사용자가 빠르게 이해할 수 있도록 요약 콘텐츠로 변환하였다.</li>
              </ul>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>3. 경제 용어 추출 및 데이터 분석</strong>
              <p>뉴스 본문에서 경제 관련 키워드를 자동 추출하여 다음 정보를 생성하였다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>주요 경제 키워드, 뉴스 관련 용어, 경제 용어 사전 데이터</li>
                <li>이를 통해 뉴스 기사에서 경제 용어 기반 정보 분석이 가능하도록 설계하였다.</li>
              </ul>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>4. 데이터 저장 및 관리</strong>
              <p>수집 및 분석된 뉴스 데이터는 확장성을 고려해 데이터베이스 구조로 설계, 저장된다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>저장 데이터: 뉴스 원문, AI 요약, 경제 키워드, 생성된 메타데이터</li>
              </ul>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <strong>5. 웹 서비스 및 크롬 익스텐션 제공</strong>
              <p>사용자가 정보를 쉽게 활용할 수 있도록 두 가지 인터페이스를 개발하였다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li><strong>웹 서비스:</strong> 뉴스 목록 조회, 뉴스 요약 확인, 경제 키워드 분석</li>
                <li><strong>크롬 익스텐션:</strong> 뉴스 페이지 내 AI 요약, 경제 용어 강조/설명 및 질문 기능 제공</li>
              </ul>
            </div>
          </div>
        ),
        role: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서는 AI 서비스 기획부터 데이터 처리 시스템 설계, 크롬 익스텐션 인터페이스 구현까지 전반적인 개발을 담당하였다.</p>
            <ol style={{ marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li><strong>1. 서비스 기획 및 구조 설계:</strong> AI 뉴스 요약 서비스 전체 구조, 수집/처리 파이프라인 기획, 사용자 흐름 기획</li>
              <li><strong>2. 뉴스 데이터 수집 시스템 구축:</strong> 뉴스 API 기반 데이터 수집 구조 설계, 크롤링 로직 구현, 저장 구조 설계</li>
              <li><strong>3. AI 뉴스 요약 기능 구현:</strong> AI 기반 뉴스 요약 로직 및 텍스트 처리/분석 구조 설계 구현</li>
              <li><strong>4. 데이터베이스 구조 설계:</strong> 뉴스 메타데이터 및 분석 데이터 보존 구조 구현</li>
              <li><strong>5. 크롬 익스텐션 UI/기능 개발:</strong> 사용자 인터페이스 및 뉴스 페이지 내 AI 요약, 경제 용어 설명 구현</li>
            </ol>
          </div>
        ),
        tech: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서 사용한 주요 기술은 다음과 같다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li><strong>AI / NLP:</strong> LangChain, LangGraph, HuggingFace LLM, RAG 기반 뉴스 요약</li>
              <li><strong>데이터 수집:</strong> Naver News API, Web Crawling</li>
              <li><strong>데이터 처리:</strong> Python, Pandas</li>
              <li><strong>백엔드:</strong> FastAPI, Apache Airflow, PostgreSQL</li>
              <li><strong>프론트엔드:</strong> React, HTML, CSS</li>
              <li><strong>브라우저 확장:</strong> Chrome Extension, JavaScript</li>
              <li><strong>AI 엔진:</strong> FAISS, Neo4j, vLLM</li>
              <li><strong>개발 환경:</strong> Linux Server, Docker, Git</li>
            </ul>
          </div>
        ),
        result: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트를 통해 다음 기능을 구현하였다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li>뉴스 기사 자동 수집 및 AI 기반 요약/데이터 저장 시스템 구축</li>
              <li>웹 기반 뉴스 서비스 제공 및 크롬 익스텐션 분석 기능</li>
              <li>경제 용어 분석 및 해설, 기사 핵심 내용 정보 분석 기능 제공</li>
            </ul>
            <div style={{ marginTop: "1rem", backgroundColor: "rgba(59,130,246,0.05)", padding: "1rem", borderRadius: "8px" }}>
              <strong>[성과]</strong><br />
              본 프로젝트를 통해 다음과 같은 성과를 달성하였다.<br />
              1. <strong>뉴스 데이터 자동 수집 및 분석 시스템 구축:</strong> 데이터를 자동 수집하고 AI 기반 분석 시스템 구축<br />
              2. <strong>AI 뉴스 요약 서비스 구현:</strong> 긴 기사를 AI 요약 형태로 제공해 사용자가 핵심 내용을 빠르게 이해하도록 도모<br />
              3. <strong>브라우저 기반 AI 서비스 제공:</strong> 사용자가 뉴스 사이트를 이동하지 않고도 확장 프로그램을 통해 즉각적인 기능을 사용<br />
              4. <strong>추천 및 분석 서비스 확장 기반 마련:</strong> 데이터를 축적하여 향후 연관 추천 시스템 등으로 확장할 수 있는 아키텍처 구축<br />
              5. <strong>AI 서비스 기획 및 개발 경험 확보:</strong> 뉴스 데이터 수집부터 요약 구현, 시스템 파이프라인 개발까지 전체 구조 설계 경험 축적
            </div>
          </div>
        ),
      }
    },
    {
      id: 2,
      title: "매장 좌석 현황 분석 시스템 (CCTV 객체 인식)",
      description: "CCTV 영상을 활용하여 사람, 테이블, 의자를 자동 인식하고 실시간 매장 혼잡도를 분석하는 웹 대시보드",
      tags: ["Python", "YOLOv8", "OpenCV", "Flask"],
      image: project2Img,
      featured: true,
      details: {
        problem: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>카페나 매장에서 좌석 이용 현황을 실시간으로 파악하기 어려운 문제가 존재한다.</p>
            <p>직원이 직접 확인하거나 단순 CCTV 확인에 의존할 경우 다음과 같은 문제가 발생한다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li>매장 좌석의 실시간 이용률 파악이 어려움</li>
              <li>혼잡도 데이터를 축적하기 어려움</li>
              <li>고객에게 좌석 상황을 안내하기 어려움</li>
              <li>매장 운영 데이터 기반 의사결정이 어려움</li>
            </ul>
            <p>따라서 CCTV 영상을 활용하여 사람, 테이블, 의자를 자동으로 인식하고 좌석 사용 여부와 매장 혼잡도를 자동으로 분석하는 시스템이 필요하다.</p>
          </div>
        ),
        solution: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트는 커피숍 CCTV 영상을 입력으로 받아 객체 인식 기반으로 좌석 점유 상태를 분석하는 시스템을 개발하였다.<br />전체 시스템 흐름은 다음과 같다.</p>
            <ol style={{ marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li>CCTV 영상 입력</li>
              <li>YOLO 객체 인식 모델을 이용하여 다음 객체 탐지 (사람, 테이블, 의자)</li>
              <li>객체 위치 정보를 이용하여 테이블 주변에 사람이 존재하는지 분석</li>
              <li>좌석 상태 계산 (총 테이블 수, 사용 중인 테이블, 빈 테이블, 좌석 점유율)</li>
              <li>분석 결과를 CSV 데이터로 저장 (시간, 총 좌석, 사용 좌석, 빈 좌석, 점유율, 혼잡도)</li>
              <li>Flask 웹 서버를 통해 대시보드 제공 (실시간 좌석 현황, 혼잡도 표시, 자동 업데이트 기능)</li>
            </ol>
          </div>
        ),
        role: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서 다음 역할을 수행하였다.</p>
            <ol style={{ marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li><strong>프로젝트 전체 설계:</strong> 객체 인식 기반 좌석 분석 시스템 구조 설계, 데이터 흐름 설계</li>
              <li><strong>객체 인식 모델 구축:</strong> YOLO 기반 객체 인식 모델 적용, 커피숍 환경에 맞게 사람, 테이블, 의자 객체 탐지</li>
              <li><strong>좌석 점유율 분석 로직 구현:</strong> 객체 위치 기반 좌석 사용 여부 판단 알고리즘 개발, 테이블 기준 좌석 점유 상태 계산</li>
              <li><strong>데이터 기록 시스템 구현:</strong> 좌석 상태 데이터를 CSV 파일로 저장, 시간별 데이터 로그 관리</li>
              <li><strong>웹 대시보드 개발:</strong> Flask 기반 웹 서버 구축, 좌석 현황 데이터 시각화, 자동 새로고침 기능 구현</li>
            </ol>
          </div>
        ),
        tech: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서 사용한 주요 기술은 다음과 같다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li><strong>AI / Computer Vision:</strong> YOLOv8, Object Detection, Computer Vision</li>
              <li><strong>개발 언어:</strong> Python</li>
              <li><strong>데이터 처리:</strong> Pandas, CSV 데이터 로그</li>
              <li><strong>웹 서비스:</strong> Flask, HTML/CSS</li>
              <li><strong>영상 처리:</strong> OpenCV</li>
              <li><strong>개발 환경:</strong> Linux, CUDA/GPU 환경</li>
            </ul>
          </div>
        ),
        result: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>시스템을 통해 다음 기능을 구현하였다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li>CCTV 영상에서 사람, 테이블, 의자 자동 인식</li>
              <li>테이블 기준 좌석 사용 여부 자동 판단</li>
              <li>매장 전체 좌석 점유율 실시간 계산</li>
              <li>시간별 좌석 데이터 자동 저장</li>
              <li>웹 대시보드를 통한 실시간 확인</li>
            </ul>
            <p>또한 다음과 같은 데이터를 생성할 수 있다: 총 테이블 수, 사용 중인 테이블, 빈 테이블, 좌석 점유율, 매장 혼잡도.</p>
            <div style={{ marginTop: "1rem", backgroundColor: "rgba(59,130,246,0.05)", padding: "1rem", borderRadius: "8px" }}>
              <strong>[성과]</strong><br />
              본 프로젝트를 통해 다음 성과를 얻었다.<br />
              1. CCTV 영상 기반 매장 분석 자동화<br />
              2. 좌석 이용 데이터의 정량적 수집 가능<br />
              3. 매장 혼잡도 시각화 가능<br />
              4. 운영 데이터 기반 의사결정 지원<br />
              5. AI 객체 인식 기술을 실제 서비스 형태로 구현<br /><br />
              또한 본 프로젝트를 통해 Computer Vision, 객체 인식, 웹 대시보드 개발, 데이터 기록 시스템을 통합적으로 구현하는 경험을 확보하였다.
            </div>
          </div>
        ),
        link: "https://github.com/example/cctv-log",
      }
    },
    {
      id: 2,
      title: "대화 기반 메신저 감정 · 이슈 · 약속 분석 AI 시스템",
      description: "메신저 대화 데이터를 분석하여 감정(sentiment), 이슈(issue), 약속(appointment)을 자동 추출하는 NLP 기반 분석 시스템",
      tags: ["Python", "NLP", "Graph RAG", "Neo4j", "OpenAI"],
      image: project2Img,
      featured: true,
      details: {
        problem: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>메신저 대화는 일상적인 커뮤니케이션의 핵심 수단이지만, 대화 속에서 발생하는 감정 변화, 약속, 이슈 등의 중요한 정보는 대부분 비정형 텍스트 형태로 존재한다.</p>
            <p>이러한 정보는 사람이 직접 읽어야만 이해할 수 있어 다음과 같은 문제가 발생한다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li>대화 내용이 길어질수록 핵심 내용을 파악하기 어려움</li>
              <li>약속이나 일정 정보가 대화 속에 묻혀 관리가 어려움</li>
              <li>대화 속 감정 변화나 갈등 상황을 자동으로 파악하기 어려움</li>
              <li>메신저 데이터 분석을 위한 구조화된 데이터가 부족함</li>
            </ul>
            <p>따라서 본 프로젝트에서는 메신저 대화를 분석하여 감정, 이슈, 약속 정보를 자동으로 추출하고 이를 구조화된 데이터로 변환하는 NLP 기반 분석 시스템을 구축하는 것을 목표로 하였다.</p>
          </div>
        ),
        solution: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서는 메신저 대화를 입력받아 자연어 처리 및 Graph RAG 기반 분석을 통해 감정, 이슈, 약속 정보를 자동으로 추출하는 시스템을 구축하였다.</p>

            <div style={{ marginLeft: "1rem" }}>
              <strong>1. 대화 데이터 전처리 및 클러스터링</strong>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>메신저 대화를 시간 기준으로 클러스터(cluster) 단위로 묶어 분석</li>
                <li>하나의 대화 흐름을 하나의 이벤트 단위로 구조화</li>
                <li>conversation_time.start / conversation_time.end 기반 대화 그룹화</li>
              </ul>
            </div>

            <div style={{ marginLeft: "1rem" }}>
              <strong>2. LLM 기반 대화 구조 분석</strong>
              <p>LLM을 활용하여 대화 텍스트에서 다음 정보를 자동 추출하도록 설계하였다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>Issue (대화 속 문제 상황)</li>
                <li>Promise / Appointment (약속 정보)</li>
                <li>Emotion / Sentiment (감정 상태)</li>
                <li>Main Topic (대화 주제)</li>
                <li>Summary (대화 요약)</li>
              </ul>
            </div>

            <div style={{ marginLeft: "1rem" }}>
              <strong>3. Graph RAG 기반 관계 분석</strong>
              <p>대화 데이터를 단순 텍스트 분석이 아닌 관계 기반 데이터로 분석하기 위해 Graph RAG 구조를 적용하였다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>Person, Conversation, Issue, Emotion, Appointment 노드 설계</li>
                <li>대화 간 관계 및 이벤트 흐름을 그래프 구조로 저장</li>
                <li>과거 대화 기반 맥락 분석 가능</li>
              </ul>
            </div>

            <div style={{ marginLeft: "1rem" }}>
              <strong>4. 두 가지 Graph RAG 구조 구현</strong>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li><strong>Neo4j 기반 Graph RAG:</strong> 그래프 데이터베이스를 이용해 대화 관계 및 이벤트 정보를 저장하고 조회</li>
                <li><strong>OpenAI 기반 Graph RAG:</strong> Neo4j 없이 LLM reasoning을 이용해 관계를 추론하는 lightweight 구조</li>
              </ul>
            </div>

            <div style={{ marginLeft: "1rem" }}>
              <strong>5. 분석 결과 구조화</strong>
              <p>대화 분석 결과는 다음과 같은 구조형 데이터로 생성된다.</p>
              <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                <li>클러스터 기반 대화 그룹</li>
                <li>약속 정보 (날짜 / 시간 / 장소)</li>
                <li>이슈 유형 및 해결 여부</li>
                <li>감정 분포</li>
                <li>대화 요약</li>
              </ul>
            </div>
          </div>
        ),
        role: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서는 NLP 분석 구조 설계부터 Graph 기반 데이터 모델링까지 전체 시스템 설계를 담당하였다.</p>
            <ol style={{ marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li><strong>1. NLP 분석 구조 설계:</strong> 대화에서 감정, 이슈, 약속을 추출하는 LLM 기반 분석 구조 설계</li>
              <li><strong>2. 대화 클러스터링 시스템 설계:</strong> 시간 기반 대화 그룹화 및 이벤트 단위 데이터 구조 설계</li>
              <li><strong>3. Graph RAG 아키텍처 설계:</strong> Neo4j 기반 대화 관계 모델링 및 Graph 구조 설계</li>
              <li><strong>4. LLM 프롬프트 설계:</strong> Issue / Emotion / Appointment 자동 추출을 위한 Prompt Engineering</li>
              <li><strong>5. 분석 결과 데이터 구조 설계:</strong> 클러스터 기반 구조형 데이터 생성 및 요약 시스템 설계</li>
            </ol>
          </div>
        ),
        tech: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트에서 사용한 주요 기술은 다음과 같다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li><strong>NLP / LLM:</strong> OpenAI GPT, Prompt Engineering</li>
              <li><strong>Graph RAG:</strong> Neo4j, Cypher Query</li>
              <li><strong>대화 분석:</strong> Issue / Emotion / Appointment 추출</li>
              <li><strong>데이터 처리:</strong> Python, Pandas</li>
              <li><strong>데이터 구조:</strong> Cluster 기반 대화 데이터 모델링</li>
              <li><strong>AI 분석 방식:</strong> Graph RAG (Neo4j 기반 / LLM reasoning 기반)</li>
            </ul>
          </div>
        ),
        result: (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p>본 프로젝트를 통해 다음 기능을 구현하였다.</p>
            <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
              <li>메신저 대화 데이터 기반 감정 분석 시스템 구축</li>
              <li>대화 속 약속 및 일정 정보 자동 추출</li>
              <li>이슈 유형 및 해결 여부 자동 분석</li>
              <li>대화 클러스터 기반 이벤트 분석</li>
              <li>Graph RAG 기반 관계 분석 시스템 구축</li>
            </ul>
            <div style={{ marginTop: "1rem", backgroundColor: "rgba(59,130,246,0.05)", padding: "1rem", borderRadius: "8px" }}>
              <strong>[성과]</strong><br />
              본 프로젝트를 통해 다음과 같은 성과를 달성하였다.<br />
              1. <strong>대화 기반 감정 분석 시스템 구축:</strong> 메신저 데이터를 분석하여 감정 분포 파악<br />
              2. <strong>약속 정보 자동 추출:</strong> 대화 속 일정 및 약속 정보를 구조화된 데이터로 생성<br />
              3. <strong>Graph 기반 관계 분석 구현:</strong> 대화 관계를 그래프 구조로 분석하는 시스템 구현<br />
              4. <strong>LLM 기반 대화 이해 기술 적용:</strong> 자연어 데이터를 구조화 데이터로 변환하는 NLP 파이프라인 구축<br />
              5. <strong>확장 가능한 대화 분석 구조 설계:</strong> 상담 분석, 고객 VOC 분석 등으로 확장 가능한 구조 확보
            </div>
          </div>
        ),
      }
    },
    {
      id: 4,
      title: "AI 이미지 디자인 작업",
      description: "ComfyUI를 활용한 고효율 브랜드 이미지 에셋 제작",
      tags: ["ComfyUI", "Photoshop"],
      image: project4Img,
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
            <div key={project.id} className="project-card featured">
              <div className="project-image-wrapper">
                {/* Fallback pattern if image is missing */}
                <div className="project-image placeholder-img">
                  <span className="placeholder-text">Thumbnail</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <button
                  className="btn-view-details"
                  onClick={() => onOpenModal(project)}
                >
                  상세 보기 <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="other-projects">
          {otherProjects.map((project) => (
            <div key={project.id} className="project-card compact">
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <button
                  className="btn-view-details"
                  onClick={() => onOpenModal(project)}
                >
                  상세 보기 <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
