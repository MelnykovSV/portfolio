import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;

  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;

export const ResumeLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  font-weight: 700;
`;

export const MenuButton = styled.button`
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
    stroke: ${({ theme }) => theme.primary};
    width: 100%;
    height: 100%;
  }
`;

export const SocialsBlock = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
`;

export const EmailBlock = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px;
`;
