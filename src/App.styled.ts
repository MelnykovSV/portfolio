import styled from '@emotion/styled';
import bgImage from './assets/space.jpg';

export const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: auto;
  h1 {
    padding-left: 30px;
    padding-right: 30px;
    color: white;
  }
`;
