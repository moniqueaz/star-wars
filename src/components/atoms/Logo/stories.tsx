import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta;

export const Default: Story = () => {
  return <Logo />;
};
