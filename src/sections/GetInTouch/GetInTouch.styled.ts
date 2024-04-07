import styled from '@emotion/styled';

export const Wrapper = styled.section`
  h2 {
    color: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: transform 2s ease, opacity 2s ease;
    text-align: center;
    margin: 0;
    margin-bottom: 30px;

    &.shown {
      opacity: 1;
    }
  }
`;

export const Paragraph = styled.p`
  width: min(100%, 600px);
  margin: 0 auto;
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const EmailLink = styled.a`
  display: block;
  margin: 0 auto;
  width: 150px;
  text-align: center;
`;
