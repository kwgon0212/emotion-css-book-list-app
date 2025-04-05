# Emotion CSS - 도서 검색 애플리케이션 예제

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-5A3EE8?style=for-the-badge&logo=emotion&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### 1. 컴포넌트 스코프 CSS

- CSS-in-JS 방식으로 컴포넌트별로 스타일을 격리
- 클래스명 충돌 걱정 없이 자유로운 스타일링
- 컴포넌트와 스타일의 강한 결합으로 유지보수성 향상

### CSS-in-JS?

CSS-in-JS는 JavaScript 환경에서 CSS를 작성하는 방식입니다. 전통적인 CSS와 달리:

- JavaScript의 모든 기능(변수, 함수, 조건문 등)을 스타일에 활용 가능
- 컴포넌트 단위로 스타일을 관리하여 스코프 격리
- 동적 스타일링이 용이하며 런타임에 스타일 변경 가능
- TypeScript와의 통합으로 타입 안정성 확보

### 2. 동적 스타일링

- JavaScript 변수와 props를 활용한 동적 스타일 적용
- 조건부 스타일링이 간단하고 직관적
- 테마 시스템과의 자연스러운 통합

### 3. 성능 최적화

- 런타임에 CSS를 생성하여 번들 크기 최소화
- 사용된 스타일만 자동으로 추출되어 최적화
- 서버 사이드 렌더링 지원

### 4. 유지보수성

- 스타일 로직을 컴포넌트와 함께 관리
- 재사용 가능한 스타일 컴포넌트 생성 용이
- 테마 시스템을 통한 일관된 디자인 시스템 구축
