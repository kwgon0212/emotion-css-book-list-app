import styled from "@emotion/styled";

export const LogoText = styled.h3`
  margin: 0;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 15px;
`;

export const Header = styled.header`
  border-bottom: 1px solid gray;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
