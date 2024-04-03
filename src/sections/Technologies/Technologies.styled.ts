import styled from '@emotion/styled';

export const Wrapper = styled.section``;

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    gap: 20px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
`;
