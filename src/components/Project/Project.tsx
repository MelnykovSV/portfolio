import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Project.styled';

interface IProjectProps {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  isTimePassed: boolean;
  links: {
    github: string;
    githubBack?: string;
    moreInfo?: string;
    livePage: string;
  };
}

export default function Project({
  name,
  description,
  image,
  technologies,
  isTimePassed,
  links: { github, githubBack, moreInfo, livePage },
}: IProjectProps) {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isShown && inView && isTimePassed) {
      setIsShown(true);
    }
  }, [inView, isShown, isTimePassed]);
  return (
    <S.Wrapper className={isShown && isTimePassed ? 'shown' : ''}>
      <h3>{name}</h3>
      <S.ProjectBody ref={ref}>
        <S.InfoBlock className={isShown && isTimePassed ? 'shown' : ''}>
          <h3>{name}</h3>

          <div>
            <p>{description}</p>
            <S.TechList>
              {technologies.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </S.TechList>
            <S.Links>
              {moreInfo && <S.Link href={moreInfo}>More info</S.Link>}
              <S.Link href={github}>Github</S.Link>
              {githubBack && <S.Link href={githubBack}>Github(backend)</S.Link>}
              <S.Link href={livePage}>Page</S.Link>
            </S.Links>
          </div>
        </S.InfoBlock>

        <S.ImageBlock className={isShown && isTimePassed ? 'shown' : ''}>
          <img src={image} alt={name} width="600" />
        </S.ImageBlock>
      </S.ProjectBody>
    </S.Wrapper>
  );
}
