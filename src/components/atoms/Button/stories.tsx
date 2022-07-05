import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Default: Story = args => {
  return <Button {...args}>Button Text</Button>;
};

export const Small: Story = () => {
  return <Button size="small">Button Text</Button>;
};

export const Full: Story = () => {
  return <Button size="full">Button Text</Button>;
};

export const Dark: Story = () => {
  return <Button color="dark">Button Text</Button>;
};
