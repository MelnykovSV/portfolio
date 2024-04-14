import styled from '@emotion/styled';

export const Wrapper = styled.section`
  padding-top: 40px;

  @media screen and (min-width: 1024px) {
    padding-bottom: 57px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
  margin-bottom: 70px;
  h2 {
    color: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: transform 2s ease, opacity 2s ease;
    font-size: 30px;
    &.shown {
      opacity: 1;
    }
  }
`;

export const Container = styled.div``;

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 1024px) {
    gap: 70px;
  }

  @media screen and (min-width: 1440px) {
    gap: 30px;
  }
  padding: 0;
  margin: 0;
`;
