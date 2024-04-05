import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;

  & > div:nth-of-type(1) {
    transition: transform 1s linear;

    transform: translateX(-200%);

    &.shown {
      transform: translateX(0);
    }
  }

  & > div:nth-of-type(2) {
    transition: transform 1s linear;
    transform: translateX(200%);

    &.shown {
      transform: translateX(0);
    }
  }

  :nth-of-type(2n) {
    flex-direction: row-reverse;

    & > div:nth-of-type(1) {
      align-items: end;
      transform: translateX(200%);
      &.shown {
        transform: translateX(0);
      }
      ul {
        justify-content: end;
      }
    }

    & > div:nth-of-type(2) {
      transform: translateX(-200%);
      &.shown {
        transform: translateX(0);
      }
    }
  }
`;

export const ImageBlock = styled.div`
  width: 60%;
  img {
    width: 100%;
  }
  position: relative;
  z-index: 10;
`;
export const InfoBlock = styled.div`
  width: 40%;
  position: relative;
  z-index: 15;
  display: flex;
  flex-direction: column;

  & > div {
    background-color: rgba(0, 0, 0, 1);
    padding: 15px;
    width: 600px;
    position: relative;
    color: white;
  }
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
`;

export const Links = styled.div`
  display: flex;
  justify-content: end;
`;

export const Link = styled.a`
  display: block;
`;
