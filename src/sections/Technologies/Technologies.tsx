import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Technologies.styled';
import technologiesList from '../../technologiesList';
import { TechCard } from '../../components';

export default function Technologies() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);
  const [isTimePassed, setIsTimePassed] = useState(false);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

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

  useEffect(() => {
    if (isTimePassed && inView) {
      const interval = setInterval(() => {
        if (visibleItems.length < technologiesList.length) {
          setVisibleItems((prevItems) => [...prevItems, technologiesList[prevItems.length][0]]);
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [isTimePassed, visibleItems.length, inView]);
  return (
    <S.Wrapper ref={ref}>
      <S.Title className={isShown && isTimePassed ? 'shown' : ''}>
        Some technologies I&apos;ve worked with:
      </S.Title>
      <S.TechList>
        {technologiesList.map((item) => (
          <TechCard
            text={item[0]}
            icon={item[1]}
            key={item[0]}
            isShown={!!(visibleItems.includes(item[0]) && isShown)}
          />
        ))}
      </S.TechList>
    </S.Wrapper>
  );
}
