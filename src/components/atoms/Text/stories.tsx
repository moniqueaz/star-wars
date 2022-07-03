import { Story, Meta } from '@storybook/react/types-6-0';
import Text from '.';

export default {
  title: 'Text',
  component: Text,
} as Meta;

export const Default: Story = args => {
  return <Text {...args} >Texto do paragrafo</Text>;
};

Default.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const Light: Story = args => {
  return <Text {...args} light>Texto do paragrafo</Text>;
};

