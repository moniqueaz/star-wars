import { Story, Meta } from '@storybook/react/types-6-0';
import Title from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

export const Default: Story = args => {
  return <Title {...args}>Titulo</Title>;
};

export const SessionTitle: Story = () => {
  return <Title type="sessionTitle">Titulo de Sessão</Title>;
};

export const SubTitle: Story = () => {
  return <Title type="subTitle">Subtitulo</Title>;
};

export const Dark: Story = () => {
  return <Title color="dark">Title</Title>;
};

Dark.parameters = {
  backgrounds: {
    default: 'light',
  },
};
