import * as S from './TechCard.styled';

interface ITechCard {
  text: string;
  icon: string;
}

export default function TechCard({ text, icon: Icon }: ITechCard) {
  return (
    <S.Wrapper>
      <Icon width={1000} />
      <p>{text}</p>
    </S.Wrapper>
  );
}
