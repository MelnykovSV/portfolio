import { Suspense, useState } from 'react';
import { Outlet } from 'react-router';
import { useMediaQuery } from 'usehooks-ts';
import { IoMenu } from 'react-icons/io5';

import Nav from '../Nav/Nav';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as S from './SharedLayoud.styled';

export default function SharedLayout() {
  const matches = useMediaQuery('(min-width: 768px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobilemenuCloseHandler = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <S.Wrapper>
      <S.Header>
        {matches ? (
          <>
            <Nav />
            <S.ResumeLink to="/resume.pdf" target="_blank" rel="noreferrer noopener">
              Resume
            </S.ResumeLink>
          </>
        ) : (
          <S.MenuButton
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(true);
            }}
          >
            <IoMenu />
          </S.MenuButton>
        )}
      </S.Header>
      <S.Main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </S.Main>
      <MobileMenu closeHandler={mobilemenuCloseHandler} isOpen={isMobileMenuOpen} />
    </S.Wrapper>
  );
}
