import styled from '@emotion/styled';

export const Wrapper = styled.section`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
  h1 {
    color: ${({ theme }) => theme.primary};
    padding: 0;
    margin: 0;
    font-size: 60px;
    margin-bottom: 10px;

    @media screen and (min-width: 1440px) {
      font-size: 80px;
    }
  }
`;

export const Container = styled.div``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 30px;
  margin: 0;
  margin-bottom: 15px;

  @media screen and (min-width: 1440px) {
    font-size: 60px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 30px;
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 45px;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.primary};
  margin: 0;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const TitleBlock = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 60%;
  }
`;

export const InfoBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 15px;
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 40%;
    padding: 15px 25px;
  }
`;

export const AboutTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 30px;
  margin: 0;
  margin-bottom: 15px;
`;
