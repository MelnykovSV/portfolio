import { IoMenu } from 'react-icons/io5';
import Nav from '../Nav/Nav';

import * as S from './Header.styled';

interface IHeaderProps {
  matches: boolean;
  mobilemenuOpenHandler: () => void;
  isAtTop: boolean;
}

export default function Header({ matches, mobilemenuOpenHandler, isAtTop }: IHeaderProps) {
  return (
    <S.Wrapper className={isAtTop ? '' : 'shrinked'}>
      {matches ? (
        <>
          <Nav />
          <S.ResumeLink
            className="visible"
            to="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </S.ResumeLink>
        </>
      ) : (
        <S.MenuButton
          type="button"
          onClick={() => {
            mobilemenuOpenHandler();
          }}
        >
          <IoMenu />
        </S.MenuButton>
      )}
    </S.Wrapper>
  );
}
