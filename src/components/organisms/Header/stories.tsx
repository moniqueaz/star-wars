import { Story, Meta } from '@storybook/react/types-6-0';
import Header from '.';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

export const Default: Story = () => {
  return <Header />;
};
