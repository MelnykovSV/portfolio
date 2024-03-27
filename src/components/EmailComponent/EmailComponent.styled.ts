import styled from '@emotion/styled';

export const Wrapper = styled.div`
  writing-mode: vertical-rl;
  height: 360px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.primary};
  }
  &::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

export const Container = styled.div``;
