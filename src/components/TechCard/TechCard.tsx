import * as S from './TechCard.styled';

interface ITechCard {
  text: string;
  icon: string;
  icon2x: string;
  iconWebp: string;
  icon2xWeb: string;
  isShown: boolean;
}

export default function TechCard({ text, icon, icon2x, iconWebp, icon2xWeb, isShown }: ITechCard) {
  return (
    <S.Wrapper className={isShown ? 'shown' : ''}>
      <S.ImageThumb>
        <picture>
          <source srcSet={`${icon} 1x, ${icon2x} 2x`} type="image/jpeg" />
          <source srcSet={`${iconWebp} 1x, ${icon2xWeb} 2x`} type="image/jpeg" />
          <img src={icon} alt={text} height={45} />
        </picture>
      </S.ImageThumb>

      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
