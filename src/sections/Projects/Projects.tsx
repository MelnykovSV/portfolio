import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './Projects.styled';
import { Project } from '../../components';
import projects from '../../projects';

export default function Projects() {
  const [ref, inView] = useInView();
  const [isShown, setIsShown] = useState(false);
  const [isTimePassed, setIsTimePassed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimePassed(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isShown && inView) {
      setIsShown(true);
    }
  }, [inView, isShown]);
  return (
    <S.Wrapper ref={ref} id="projects">
      <h2 className={isShown && isTimePassed ? 'shown' : ''}>My Projects</h2>

      <S.ProjectsList>
        {projects.map(({ name, description, technologies, image }) => (
          <Project
            name={name}
            description={description}
            technologies={technologies}
            image={image}
            isTimePassed={isTimePassed}
            key={name}
          />
        ))}
      </S.ProjectsList>
    </S.Wrapper>
  );
}
