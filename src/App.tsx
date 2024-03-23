import { useEffect, useRef, useState } from 'react';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';

import * as S from './App.styled';
import generateParticles from './generateParticles';

type Size = {
  width?: number;
  height?: number;
};

export default function App() {
  const [{ width, height }, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);

  const onResize = useDebounceCallback(setSize, 200);

  useResizeObserver({
    ref: wrapperRef,
    onResize,
  });

  useEffect(() => {
    const { mouseMove, scrollCheck, resize } = generateParticles(
      wrapperRef.current,
      canvasRef.current,
    );

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, [width, height]);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Canvas ref={canvasRef} />
      <S.Container>
        <h1>My portfolio</h1>
      </S.Container>
    </S.Wrapper>
  );
}
