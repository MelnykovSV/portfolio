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
  padding-top: 93px;
  overflow-x: hidden;
`;

// export const ResumeLink = styled(Link)`
//   color: ${({ theme }) => theme.primary};
//   font-size: 22px;
//   font-weight: 700;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(-50%);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   opacity: 0;
//   animation: fadeIn 0.5s ease forwards;
//   animation-delay: 0.7s; /* Delay of 1 second */
// `;

// export const MenuButton = styled.button`
//   width: 40px;
//   height: 40px;
//   border: none;
//   border-radius: 10px;
//   background-color: transparent;
//   padding: 3px;
//   position: absolute;
//   top: 30px;
//   right: 30px;

//   svg {
//     stroke: ${({ theme }) => theme.primary};
//     width: 100%;
//     height: 100%;
//   }
// `;

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
