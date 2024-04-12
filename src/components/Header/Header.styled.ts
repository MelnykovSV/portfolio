import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;

  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  position: sticky;

  top: 0;

  background-color: transparent;
  z-index: 100;
  box-shadow: none;

  transition: padding 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

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

  &.shrinked {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #020438;
    box-shadow: rgba(113, 47, 255, 0.32) 0px 5px 15px;
  }
`;

export const ResumeLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-size: 22px;
  font-weight: 700;
  padding: 10px 20px;
  border: #fff solid 1px;
  border-radius: 5px;
  line-height: 1.1;
  transition: color 0.3s linear, box-shadow 0.3s linear;
  box-shadow: none;
  background-color: rgba(60, 8, 126, 0.42);
  &:hover {
    box-shadow: rgba(113, 47, 255, 0.62) 0px 5px 15px;

    background-color: rgba(60, 8, 126, 0.72);

    color: ${({ theme }) => theme.primary};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.7s;
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
