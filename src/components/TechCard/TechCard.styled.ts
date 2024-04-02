import styled from '@emotion/styled';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.primary};

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: calc((100% - 80px) / 5);
`;

export const Container = styled.div``;
