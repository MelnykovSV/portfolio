import * as S from './TechCard.styled';

interface ITechCard {
  text: string;
  icon: string;
  className: string;
}

export default function TechCard({ text, icon, ...props }: ITechCard) {
  return (
    <S.Wrapper>
      <S.ImageThumb>
        <S.Image src={icon} alt={text} width={60} height={60} {...props} />
      </S.ImageThumb>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
