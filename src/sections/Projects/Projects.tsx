import * as S from './Projects.styled';
import { Project } from '../../components';
import projects from '../../projects';

export default function Projects() {
  return (
    <S.Wrapper>
      <h2>My Projects</h2>

      {projects.map(({ name, description, technologies, image }) => (
        <Project
          name={name}
          description={description}
          technologies={technologies}
          image={image}
          key={name}
        />
      ))}
    </S.Wrapper>
  );
}
