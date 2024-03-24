import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'usehooks-ts';
import { IoCloseSharp } from 'react-icons/io5';
import * as S from './MobileMenu.styled';

interface IMobileMenuProps {
  closeHandler: () => void;
  isOpen: boolean;
}

export default function MobileMenu({ closeHandler, isOpen }: IMobileMenuProps) {
  const backdropRef = useRef(null);
  const root = document.querySelector<HTMLElement>('#root')!;

  const matches = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeHandler]);

  useEffect(() => {
    if (matches) {
      closeHandler();
    }
  }, [matches, closeHandler]);
  return createPortal(
    <S.Backdrop
      className={`${isOpen ? '' : 'hidden'} `}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (backdropRef.current === e.target) {
          closeHandler();
        }
      }}
      ref={backdropRef}
    >
      <S.Wrapper className={`${isOpen ? '' : 'hidden'}`}>
        <S.CloseButton type="button" onClick={closeHandler}>
          <IoCloseSharp />
        </S.CloseButton>

        <S.MobileMenuList>
          <S.MobileMenuListItem>
            <S.MobileMenuLink to="/#about" onClick={closeHandler}>
              About
            </S.MobileMenuLink>
          </S.MobileMenuListItem>
          <S.MobileMenuListItem>
            <S.MobileMenuLink to="/#projects" onClick={closeHandler}>
              Projects
            </S.MobileMenuLink>
          </S.MobileMenuListItem>
          <S.MobileMenuListItem>
            <S.MobileMenuLink to="/#contact" onClick={closeHandler}>
              Contact
            </S.MobileMenuLink>
          </S.MobileMenuListItem>
        </S.MobileMenuList>

        <S.MobileMenuResumeLink
          to="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          onClick={closeHandler}
        >
          Resume
        </S.MobileMenuResumeLink>
      </S.Wrapper>
    </S.Backdrop>,
    root,
  );
}
