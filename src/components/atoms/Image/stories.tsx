import { Story, Meta } from '@storybook/react/types-6-0';
import Image from '.';

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta;

export const Default: Story = args => {
  return <Image {...args} src="https://via.placeholder.com/150"/>;
};
export const Normal: Story = () => {
  return <Image src="https://via.placeholder.com/500x200"/>;
};

export const Full: Story = () => {
  return <Image src="https://via.placeholder.com/500x200" size="full"/>;
};
