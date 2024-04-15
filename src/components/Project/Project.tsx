import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Project.styled';

interface IProjectProps {
  name: string;
  description: string;
  image: {
    jpg: string;
    jpg2x: string;
    webp: string;
    webp2x: string;
  };
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
              {moreInfo && (
                <S.Link href={moreInfo} target="_blank" rel="noopener noreferrer">
                  More info
                </S.Link>
              )}
              <S.Link href={github} target="_blank" rel="noopener noreferrer">
                Github
              </S.Link>
              {githubBack && (
                <S.Link href={githubBack} target="_blank" rel="noopener noreferrer">
                  Github(backend)
                </S.Link>
              )}
              <S.Link href={livePage} target="_blank" rel="noopener noreferrer">
                Page
              </S.Link>
            </S.Links>
          </div>
        </S.InfoBlock>

        <S.ImageBlock className={isShown && isTimePassed ? 'shown' : ''}>
          <picture>
            <source srcSet={`${image.webp} 1x, ${image.webp2x} 2x`} type="image/jpeg" />
            <source srcSet={`${image.jpg} 1x, ${image.jpg} 2x`} type="image/jpeg" />
            <img src={image.jpg} alt={name} width={780} />
          </picture>
        </S.ImageBlock>
      </S.ProjectBody>
    </S.Wrapper>
  );
}
