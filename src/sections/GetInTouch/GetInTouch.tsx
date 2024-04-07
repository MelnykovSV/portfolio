import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './GetInTouch.styled';

export default function GetInTouch() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isShown && inView) {
      setIsShown(true);
    }
  }, [inView, isShown]);
  return (
    <S.Wrapper ref={ref}>
      <h2 className={isShown ? 'shown' : ''}>Get In Touch!</h2>
      <S.Paragraph>
        I&apos;m looking for new opportunities and my inbox is always open. Whether you have an idea
        for a project or just want to diskuss something, feel free to write me!
      </S.Paragraph>
      <S.EmailLink>Say Hello</S.EmailLink>
    </S.Wrapper>
  );
}
