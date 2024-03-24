import { useEffect, useRef, useState, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';
import { ModernNormalize } from 'emotion-modern-normalize';
import { SharedLayout } from './components';

import * as S from './App.styled';
import generateParticles from './generateParticles';

const MainPage = lazy(() => import('./pages/MainPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

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
      <ModernNormalize />
      <S.Canvas ref={canvasRef} />
      <S.Container>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Route>
        </Routes>
      </S.Container>
    </S.Wrapper>
  );
}
