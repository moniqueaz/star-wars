import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '.';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

export const Arrow: Story = args => {
  return <Icon icon="arrow" {...args}/>;
};

export const User: Story = args => {
  return <Icon icon="user" {...args}/>;
};
