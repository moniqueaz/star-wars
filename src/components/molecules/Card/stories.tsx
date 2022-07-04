import { Story, Meta } from '@storybook/react/types-6-0';
import Card from '.';

export default {
  title: 'Molecules/Card',
  component: Card,
} as Meta;

export const Default: Story = args => {
  return (
    <div style={{ maxWidth: '150px' }}>
      <Card
        {...args}
        image="https://via.placeholder.com/150"
        title="Luke Skywalker"
        list={{
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
        }}
      />
    </div>
  );
};

export const SimpleCard: Story = () => {
  return (
    <div style={{ maxWidth: '150px' }}>
      <Card
        image="https://via.placeholder.com/150"
        title="People"
      />
    </div>
  );
};
