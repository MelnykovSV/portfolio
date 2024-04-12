import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './GetInTouch.styled';

export default function GetInTouch() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);
  const [isTimePassed, setIsTimePassed] = useState(false);

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
  return (
    <S.Wrapper ref={ref} className={isShown && isTimePassed ? 'shown' : ''} id="contact">
      <h2>Get In Touch!</h2>
      <S.Paragraph>
        I&apos;m looking for new opportunities and my inbox is always open. Whether you have an idea
        for a project or just want to diskuss something, feel free to write me!
      </S.Paragraph>
      <S.EmailLink href="mailto:serhii.v.melnykov@gmail.com">Say Hello</S.EmailLink>
    </S.Wrapper>
  );
}
