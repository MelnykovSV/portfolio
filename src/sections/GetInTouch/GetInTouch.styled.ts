import styled from '@emotion/styled';

export const Wrapper = styled.section`
  /* background-color: white; */
  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 30px;

    text-align: center;
    margin: 0;
    margin-bottom: 30px;
  }

  transition: transform 0.5s ${({ theme }) => theme.cubic} 0.2s,
    opacity 0.5s ${({ theme }) => theme.cubic} 0.2s;
  opacity: 0;
  transform: translateY(20%);

  &.shown {
    opacity: 1;
    transform: translateY(0);
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
  cursor: pointer;
  border-radius: 5px;

  border: solid ${({ theme }) => theme.primary} 1px;
  color: ${({ theme }) => theme.primary};
  transition: color 0.3s linear, box-shadow 0.3s linear;
  box-shadow: none;

  background-color: rgba(60, 8, 126, 0.42);
  &:hover {
    box-shadow: rgba(113, 47, 255, 0.62) 0px 5px 15px;

    background-color: rgba(60, 8, 126, 0.72);

    color: ${({ theme }) => theme.primary};
  }
  padding: 10px;
`;
