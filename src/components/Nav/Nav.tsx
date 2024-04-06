import { useEffect, useState } from 'react';
import * as S from './Nav.styled';

const links = [
  ['/#about', 'About'],
  ['/#projects', 'Projects'],
  ['/#contact', 'Contact'],
];

export default function Nav() {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleItems.length < links.length) {
        setVisibleItems((prevItems) => [...prevItems, links[prevItems.length][0]]);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [visibleItems.length]);

  return (
    <S.Wrap>
      <S.NavList>
        {links.map((item) => (
          <S.NavLinkStyled
            to={item[0]}
            key={item[0]}
            className={visibleItems.includes(item[0]) ? 'visible' : ''}
          >
            {item[1]}
          </S.NavLinkStyled>
        ))}
      </S.NavList>
    </S.Wrap>
  );
}
