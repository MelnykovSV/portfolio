import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Technologies.styled';
import technologiesList from '../../technologiesList';
import { TechCard } from '../../components';

export default function Technologies() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);
  const [isTimePassed, setIsTimePassed] = useState(false);
  // const [visibleItems, setVisibleItems] = useState<string[]>([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimePassed(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    if (!isShown && inView) {
      setIsShown(true);
    }
  }, [inView, isShown]);

  // useEffect(() => {
  //   if (!isTimePassed) {
  //     return;
  //   }
  //   const interval = setInterval(() => {
  //     if (visibleItems.length < technologiesList.length) {
  //       setVisibleItems((prevItems) => [...prevItems, technologiesList[prevItems.length][0]]);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 200);

  //   return () => clearInterval(interval);
  // }, [isTimePassed, visibleItems.length]);
  return (
    <S.Wrapper>
      <S.Title className={isShown && isTimePassed ? 'shown' : ''}>
        Some technologies I&apos;ve worked with:
      </S.Title>
      <S.TechList ref={ref}>
        {technologiesList.map((item) => (
          <TechCard
            text={item[0]}
            icon={item[1]}
            key={item[0]}
            className={isShown && isTimePassed ? 'shown' : ''}
          />
        ))}
      </S.TechList>
    </S.Wrapper>
  );
}
