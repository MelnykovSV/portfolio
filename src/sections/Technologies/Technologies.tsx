import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Technologies.styled';
import technologiesList from '../../technologiesList';
import { TechCard } from '../../components';

export default function Technologies() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    if (!isShown && inView) {
      setIsShown(true);
    }
  }, [inView, isShown]);
  return (
    <S.Wrapper>
      <S.Title>Some technologies I&apos;ve worked with:</S.Title>
      <S.TechList ref={ref}>
        {technologiesList.map((item) => (
          <TechCard
            text={item[0]}
            icon={item[1]}
            key={item[0]}
            className={isShown ? 'shown' : ''}
          />
        ))}
      </S.TechList>
    </S.Wrapper>
  );
}
