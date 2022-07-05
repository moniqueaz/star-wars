import { Story, Meta } from '@storybook/react/types-6-0';
import RandomCard from '.';

export default {
  title: 'Organisms/RandomCard',
  component: RandomCard,
} as Meta;

export const Default: Story = () => {
  return <RandomCard count={3} slug="people" />;
};
