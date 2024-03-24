import * as S from './Nav.styled';

export default function Nav() {
  return (
    <S.Wrap>
      <S.NavList>
        <li>
          <S.NavLinkStyled to="/#about">About</S.NavLinkStyled>
        </li>
        <li>
          <S.NavLinkStyled to="/#projects">Projects</S.NavLinkStyled>
        </li>
        <li>
          <S.NavLinkStyled to="/#contact">Contact</S.NavLinkStyled>
        </li>

        <li>
          <S.NavLinkStyled to="/project">Single project</S.NavLinkStyled>
        </li>
      </S.NavList>
    </S.Wrap>
  );
}
