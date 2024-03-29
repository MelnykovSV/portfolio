import * as S from './Technologies.styled';
import technologiesList from '../../technologiesList';
import { TechCard } from '../../components';

export default function Info() {
  return (
    <S.Wrapper>
      <h2>Some technologies I&apos;ve worked with:</h2>
      <ul>
        {technologiesList.map((item) => (
          <TechCard text={item[0]} icon={item[1]} key={item[0]} />
        ))}
      </ul>
    </S.Wrapper>
  );
}
