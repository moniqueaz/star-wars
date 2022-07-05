import { Story, Meta } from '@storybook/react/types-6-0';
import Skeleton from '.';

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
} as Meta;

export const Default: Story = () => {
  return <div style={{ width: '200px', height: '100px' }}>
    <Skeleton />
  </div>;
};
