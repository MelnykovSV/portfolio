import styled from '@emotion/styled';

export const Wrapper = styled.li`
  transition: transform 1s ease-out, opacity 1s ease-out;
  @media screen and (max-width: 1023px) {
    opacity: 0;
    transform: translate(0, 50px);
    &.shown {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 25px;
    margin: 0;
    margin-bottom: 20px;
    white-space: nowrap;
    display: block;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  &:nth-of-type(2n) {
    & > div {
      @media screen and (min-width: 1024px) {
        flex-direction: row-reverse;
        & > div:nth-of-type(1) {
          align-items: end;
          flex-direction: column;
          @media screen and (min-width: 1024px) {
            transform: translate(200%, 0);
          }
          @media screen and (min-width: 1440px) {
            transform: translate(200%, 0);
          }
          &.shown {
            @media screen and (min-width: 1024px) {
              transform: translate(0, 0);
            }
            @media screen and (min-width: 1440px) {
              transform: translate(0, 0);
            }
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
          @media screen and (min-width: 1024px) {
            transform: translate(-200%, 57px);
          }
          @media screen and (min-width: 1440px) {
            transform: translate(-200%, 0);
          }
          &.shown {
            @media screen and (min-width: 1024px) {
              transform: translate(0, 57px);
            }
            @media screen and (min-width: 1440px) {
              transform: translate(0, 0);
            }
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  & > div:nth-of-type(1) {
    transition: transform 1s ease-out, opacity 1s ease-out;

    @media screen and (min-width: 1024px) {
      transform: translate(-200%, 0);
      opacity: 0;

      &.shown {
        transform: translate(0, 0);
        opacity: 1;

        @media screen and (min-width: 1024px) {
        }
      }
    }
  }

  & > div:nth-of-type(2) {
    transition: transform 1s ease-out, opacity 1s ease-out;
    @media screen and (min-width: 1024px) {
      transform: translate(200%, 57px);
    }
    @media screen and (min-width: 1440px) {
      transform: translate(200%, 0);
    }

    opacity: 0;

    &.shown {
      @media screen and (min-width: 1024px) {
        transform: translate(0, 57px);
      }
      @media screen and (min-width: 1440px) {
        transform: translate(0, 0);
      }
      opacity: 1;
    }
    div {
      justify-content: start;
    }
  }
`;

export const ImageBlock = styled.div`
  width: 100%;
  aspect-ratio: 790 / 420;

  overflow: hidden;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media screen and (min-width: 1024px) {
    width: 60%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 60%;
  }

  img {
    width: 100%;
    display: block;
    object-fit: contain;
  }
  position: relative;
  z-index: 10;
`;
export const InfoBlock = styled.div`
  width: 100%;

  p {
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 40%;
  }
  position: relative;
  z-index: 15;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 25px;
    margin: 0;
    margin-bottom: 20px;
    white-space: nowrap;
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }

  & > div {
    background-color: #020438;
    padding: 15px 25px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    @media screen and (min-width: 1024px) {
      width: 500px;
      font-size: 14px;
      border-radius: 10px;
    }
    @media screen and (min-width: 1440px) {
      width: 600px;
      font-size: 16px;
    }

    position: relative;
    color: white;

    @media screen and (min-width: 1024px) {
      transform: translate(0, 30px);
    }
    @media screen and (min-width: 1440px) {
      transform: translate(0, 0);
    }
  }
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  p {
    padding: 5px;
    border-radius: 10px;

    background-color: #7c63af;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 15px;
`;

export const Link = styled.a`
  display: block;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  transition: color 0.3s linear, box-shadow 0.3s linear;
  box-shadow: none;
  background-color: rgba(60, 8, 126, 0.42);
  &:hover {
    box-shadow: rgba(113, 47, 255, 0.62) 0px 5px 15px;

    background-color: rgba(60, 8, 126, 0.72);

    color: ${({ theme }) => theme.primary};
  }
`;
