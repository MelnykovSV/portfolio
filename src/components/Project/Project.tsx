import * as S from './Project.styled';

interface IProjectProps {
  name: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function Project({ name, description, image, technologies }: IProjectProps) {
  return (
    <S.Wrapper>
      <S.InfoBlock>
        <h3>{name}</h3>

        <div>
          <p>{description}</p>
          <S.TechList>
            {technologies.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </S.TechList>
          <S.Links>
            <S.Link href="#">Github</S.Link>
            <S.Link href="#">Page</S.Link>
          </S.Links>
        </div>
      </S.InfoBlock>

      <S.ImageBlock>
        <img src={image} alt={name} width="600" />
      </S.ImageBlock>
    </S.Wrapper>
  );
}
