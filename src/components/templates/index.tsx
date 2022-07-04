import { Container } from 'components/atoms/Container';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import * as S from './styles';

type TemplateProps = {
  children?: React.ReactNode
}

const Template = ( { children }: TemplateProps) => {
  return (
    <S.Wrapper>
      <Header />
      <Container>
        <S.Content>
          {children}
        </S.Content>
      </Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Template;
