import * as S from './Technologies.styled';
import technologiesList from '../../technologiesList';
import { TechCard } from '../../components';

export default function Technologies() {
  return (
    <S.Wrapper>
      <S.Title>Some technologies I&apos;ve worked with:</S.Title>
      <S.TechList>
        {technologiesList.map((item) => (
          <TechCard text={item[0]} icon={item[1]} key={item[0]} />
        ))}
      </S.TechList>
    </S.Wrapper>
  );
}
