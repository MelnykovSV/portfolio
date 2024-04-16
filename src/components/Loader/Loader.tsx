import { DNA } from 'react-loader-spinner';
import * as S from './Loader.styled';

export default function Loader() {
  return (
    <S.Wrapper>
      <DNA />
    </S.Wrapper>
  );
}
