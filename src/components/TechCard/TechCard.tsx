import * as S from './TechCard.styled';

interface ITechCard {
  text: string;
  icon: string;
}

export default function TechCard({ text, icon }: ITechCard) {
  return (
    <S.Wrapper>
      <img src={icon} alt={text} width={60} height={60} />
      <p>{text}</p>
    </S.Wrapper>
  );
}
