import * as S from './TechCard.styled';

interface ITechCard {
  text: string;
  icon: string;
  isShown: boolean;
}

export default function TechCard({ text, icon, isShown }: ITechCard) {
  return (
    <S.Wrapper className={isShown ? 'shown' : ''}>
      <S.ImageThumb>
        <S.Image src={icon} alt={text} width={60} height={60} />
      </S.ImageThumb>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
