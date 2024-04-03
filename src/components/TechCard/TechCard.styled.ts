import styled from '@emotion/styled';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.primary};

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  padding: 10px 15px;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    width: calc((100% - 80px) / 5);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 100px) / 6);
  }
`;

export const Container = styled.div``;

export const ImageThumb = styled.div`
  width: 30px;
  height: 30px;

  @media screen and (min-width: 1024px) {
    width: 45px;
    height: 45px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  margin: 0;
`;
