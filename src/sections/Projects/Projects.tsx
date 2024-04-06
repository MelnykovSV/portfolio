import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Projects.styled';
import { Project } from '../../components';
import projects from '../../projects';

export default function Projects() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isShown && inView) {
      setIsShown(true);
    }
  }, [inView, isShown]);
  return (
    <S.Wrapper ref={ref}>
      <h2 className={isShown ? 'shown' : ''}>My Projects</h2>

      <S.ProjectsList>
        {projects.map(({ name, description, technologies, image }) => (
          <Project
            name={name}
            description={description}
            technologies={technologies}
            image={image}
            key={name}
          />
        ))}
      </S.ProjectsList>
    </S.Wrapper>
  );
}
