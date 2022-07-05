import { Story, Meta } from '@storybook/react/types-6-0';
import SortCard from '.';

export default {
  title: 'Organisms/SortCard',
  component: SortCard,
} as Meta;

export const Default: Story = () => {
  return <SortCard count={3} slug="people" />;
};
