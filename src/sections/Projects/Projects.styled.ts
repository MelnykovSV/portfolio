import styled from '@emotion/styled';

export const Wrapper = styled.section`
  h2 {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Container = styled.div``;

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0;
`;
