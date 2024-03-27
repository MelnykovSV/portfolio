import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 360px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  &::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

export const SocialsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const SocialsListLink = styled.a`
  width: 35px;
  height: 35px;
  display: block;
  padding: 8px;
  svg {
    stroke: ${({ theme }) => theme.primary};
    width: 100%;
    height: 100%;
  }
`;
