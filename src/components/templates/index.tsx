import { Container } from 'components/atoms/Container';

type TemplateProps = {
  children?: React.ReactNode
}

const Template = ( { children }: TemplateProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Template;
