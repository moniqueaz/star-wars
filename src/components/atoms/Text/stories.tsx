import { Story, Meta } from '@storybook/react/types-6-0';
import Text from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta;

export const Default: Story = args => {
  return <Text {...args} >Texto do paragrafo</Text>;
};

export const Dark: Story = () => {
  return <Text color="dark">Texto do paragrafo</Text>;
};

Dark.parameters = {
  backgrounds: {
    default: 'light',
  },
};
