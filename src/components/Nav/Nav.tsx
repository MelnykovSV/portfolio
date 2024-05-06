import { useEffect, useState } from 'react';
import * as S from './Nav.styled';
import { links } from '../../constants';

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
          <li key={item[0]}>
            <S.NavLinkStyled
              href={item[0]}
              className={visibleItems.includes(item[0]) ? 'visible' : ''}
            >
              {item[1]}
            </S.NavLinkStyled>
          </li>
        ))}
      </S.NavList>
    </S.Wrap>
  );
}
