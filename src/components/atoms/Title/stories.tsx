import { Story, Meta } from '@storybook/react/types-6-0';
import Title from '.';

export default {
  title: 'Title',
  component: Title,
} as Meta;

export const Default: Story = () => {
  return <Title>Titulo</Title>;
};

export const SessionTitle: Story = () => {
  return <Title type="sessionTitle">Titulo de Sessão</Title>;
};

export const SubTitle: Story = () => {
  return <Title type="subTitle">Subtitulo</Title>;
};
