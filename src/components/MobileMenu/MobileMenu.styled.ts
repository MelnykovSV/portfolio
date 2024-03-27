import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  opacity: 1;
  transition: opacity 0.3s linear;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transform: translateX(0);
  transition: transform 0.3s linear;
  z-index: 110;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
    width: 350px;
  }

  &.hidden {
    transform: translateX(200%);
  }
`;

export const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-bottom: 40px;
`;

export const MobileMenuListItem = styled.li``;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  padding: 3px;
  position: absolute;
  top: 30px;
  right: 30px;

  svg {
    fill: ${({ theme }) => theme.primary};
    width: 100%;
    height: 100%;
  }
`;

export const MobileMenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  font-weight: 700;
`;

export const MobileMenuResumeLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  font-weight: 700;
`;
