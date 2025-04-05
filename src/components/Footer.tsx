import React from "react";
import { css } from "@emotion/react";

interface FooterProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
const Footer = ({ isDark, setIsDark }: FooterProps) => {
  return (
    <div
      css={css`
        margin: 1rem 0;
        display: flex;
        justify-content: center;
      `}
    >
      <p>Book List Inc, © All rights reserved.</p>
      <button
        css={css`
          background-color: #fcfcfd;
          color: #36395a;
          border: 1px solid rgba(34, 36, 38, 0.5);
          padding: 0.5rem 1.5rem;
          margin-left: 15px;
          border-radius: 3px;
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
          }
        `}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Footer;
