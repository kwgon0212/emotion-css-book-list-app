# 📚 Emotion CSS 도서 검색 앱

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-5A3EE8?style=for-the-badge&logo=emotion&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

## 🚀 주요 기능

- 📖 Google Books API를 활용한 도서 검색
- 🌓 다크/라이트 모드 테마 지원
- 💅 Emotion CSS를 활용한 스타일링
- 📱 반응형 디자인

## 🎨 Emotion CSS의 장점

### 1. 컴포넌트 스코프 CSS

- CSS-in-JS 방식으로 컴포넌트별로 스타일을 격리
- 클래스명 충돌 걱정 없이 자유로운 스타일링
- 컴포넌트와 스타일의 강한 결합으로 유지보수성 향상

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

## 🎯 테마 적용법

emotion css를 쓰면서 테마 적용에 있어 굉장히 편리하다는 것을 느낌

아래는 테마를 적용한 코드

### 테마 정의

```tsx
// Theme.ts
export interface Theme {
  text: string;
  background: string;
}

export const themeLight: Theme = {
  text: "#000",
  background: "#fff",
};

export const themeDark: Theme = {
  text: "#fff",
  background: "#121212",
};
```

### 테마 적용

```tsx
// App.tsx
import { ThemeProvider } from "@emotion/react";
import { themeDark, themeLight } from "./components/Theme";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      {/* 앱 컴포넌트 */}
    </ThemeProvider>
  );
}
```

### 테마 사용

```tsx
// 컴포넌트에서 테마 사용
import { useTheme } from "@emotion/react";

const Component = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.background};
        color: ${theme.text};
      `}
    >
      테마가 적용된 컴포넌트
    </div>
  );
};
```
