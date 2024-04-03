import * as S from './Info.styled';

export default function Info() {
  return (
    <S.Wrapper>
      <S.TitleBlock>
        <h1>Serhii Melnykov</h1>
        <S.Title> Full-stack Web Developer</S.Title>
        <S.Subtitle>Making ideas come alive on the web</S.Subtitle>
      </S.TitleBlock>

      <S.InfoBlock>
        <S.AboutTitle>About me:</S.AboutTitle>
        <S.Paragraph>
          As a goal-oriented and passionate front-end developer, I thrive on challenges, seeing each
          project as an opportunity for growth and innovation. My dedication to delivering
          exceptional results drives me to constantly seek out new and better ways to craft seamless
          user experiences with clean, efficient, and scalable code, using the best practices.
        </S.Paragraph>
        <S.Paragraph>
          I believe that work is a continuous journey of learning and improvement, and I am
          committed to expanding my knowledge and expertise to stay ahead in the fast-paced world of
          web development. With a collaborative mindset and an insatiable eagerness to learn, I am
          fully prepared to dedicate myself to creating remarkable websites and applications,
          contributing as a valuable asset to any team.
        </S.Paragraph>
      </S.InfoBlock>
    </S.Wrapper>
  );
}
