import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin-bottom: 40px;
  h2 {
    color: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: transform 2s ease, opacity 2s ease;

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
  padding: 0;
  margin: 0;
`;
