import styled from '@emotion/styled';
// import { Link } from 'react-scroll';

export const Wrap = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavLinkStyled = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  font-weight: 700;
  transition: transform 0.3s ease, opacity 1s ease, text-shadow 0.3s linear;

  opacity: 0;
  transform: translateY(-50%);

  box-shadow: none;

  /* background-color: rgba(60, 8, 126, 0.42); */
  &:hover {
    text-shadow: ${({ theme }) => theme.primary} 1px 0 20px;

    color: ${({ theme }) => theme.primary};
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
