import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
 
`;

export const Container = styled.div``;

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;

export const Main = styled.main`
  overflow-x: hidden;
  padding-bottom: 100px;
`;

export const SocialsBlock = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  z-index: 100;
  transition: none;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.7s;
`;

export const EmailBlock = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 100;
  transition: none;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.7s;
`;
