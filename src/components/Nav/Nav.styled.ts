import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  font-weight: 700;
`;
