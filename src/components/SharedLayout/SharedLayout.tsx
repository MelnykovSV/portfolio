import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'usehooks-ts';
import EmailComponent from '../EmailComponent/EmailComponent';
import SocialsComponent from '../SocialsComponent/SocialsComponent';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as S from './SharedLayoud.styled';
import Header from '../Header/Header';

export default function SharedLayout() {
  const matches = useMediaQuery('(min-width: 768px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [ref, inView] = useInView();

  useEffect(() => {
    setIsAtTop(inView);
  }, [inView]);

  const mobilemenuCloseHandler = () => {
    setIsMobileMenuOpen(false);
  };
  const mobilemenuOpenHandler = () => {
    setIsMobileMenuOpen(true);
  };
  return (
    <S.Wrapper>
      <div ref={ref} />
      <Header mobilemenuOpenHandler={mobilemenuOpenHandler} matches={matches} isAtTop={isAtTop} />
      <S.Main>
        <S.MainContainer>
          <Suspense fallback={<div>LOADING...</div>}>
            <Outlet />
          </Suspense>
        </S.MainContainer>
      </S.Main>
      <MobileMenu closeHandler={mobilemenuCloseHandler} isOpen={isMobileMenuOpen} />

      {matches ? (
        <>
          <S.SocialsBlock>
            <SocialsComponent />
          </S.SocialsBlock>
          <S.EmailBlock>
            <EmailComponent />
          </S.EmailBlock>
        </>
      ) : null}
    </S.Wrapper>
  );
}
