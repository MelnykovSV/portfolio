import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import * as S from './SocialsComponent.styled';

export default function SocialsComponent() {
  return (
    <S.Wrapper>
      <S.SocialsList>
        <li>
          <S.SocialsListLink
            href="https://www.linkedin.com/in/serhii-v-melnykov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </S.SocialsListLink>
        </li>
        <li>
          <S.SocialsListLink
            href="https://github.com/MelnykovSV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuLinkedin />
          </S.SocialsListLink>
        </li>
      </S.SocialsList>
    </S.Wrapper>
  );
}
