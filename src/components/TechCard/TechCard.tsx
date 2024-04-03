import * as S from './TechCard.styled';

interface ITechCard {
  text: string;
  icon: string;
}

export default function TechCard({ text, icon }: ITechCard) {
  return (
    <S.Wrapper>
      <S.ImageThumb>
        <S.Image src={icon} alt={text} width={60} height={60} />
      </S.ImageThumb>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
