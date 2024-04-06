import styled from '@emotion/styled';

export const Wrapper = styled.li`
  display: flex;

  & > div:nth-of-type(1) {
    transition: transform 1s ease-out, opacity 1s ease-out;

    transform: translateX(-200%);
    opacity: 0;

    &.shown {
      transform: translateX(0);
      opacity: 1;
    }
  }

  & > div:nth-of-type(2) {
    transition: transform 1s ease-out, opacity 1s ease-out;
    transform: translateX(200%);
    opacity: 0;

    &.shown {
      transform: translateX(0);
      opacity: 1;
    }
    div {
      justify-content: start;
    }
  }

  :nth-of-type(2n) {
    flex-direction: row-reverse;

    & > div:nth-of-type(1) {
      align-items: end;
      transform: translateX(200%);
      &.shown {
        transform: translateX(0);
        opacity: 1;
        text-align: end;
      }
      ul {
        justify-content: end;
      }

      div {
        justify-content: end;
      }
    }

    & > div:nth-of-type(2) {
      transform: translateX(-200%);
      &.shown {
        transform: translateX(0);
        opacity: 1;
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

  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 25px;
    margin: 0;
    margin-bottom: 20px;
  }

  & > div {
    background-color: rgb(17, 34, 64);
    padding: 15px;
    border-radius: 10px;
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
`;

export const Link = styled.a`
  display: block;
`;
