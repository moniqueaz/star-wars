import { Container } from 'components/atoms/Container';
import Header from 'components/organisms/Header';
import * as S from './styles';

type TemplateProps = {
  children?: React.ReactNode
}

const Template = ( { children }: TemplateProps) => {
  return (
    <S.Wrapper>
      <Header />
      <Container>
        {children}
      </Container>
    </S.Wrapper>
  );
};

export default Template;
