import styled from '@emotion/styled';

export const Wrapper = styled.section`
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
