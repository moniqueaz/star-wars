import { Story, Meta } from '@storybook/react/types-6-0';
import Loading from '.';

export default {
  title: 'Atoms/Loading',
  component: Loading,
} as Meta;

export const Default: Story = args => {
  return <div style={{ position: 'relative', width: '300px', height: '300px', backgroundColor: 'black' }}>
    <Loading {...args}/>
  </div>
  ;
};

export const Dark: Story = () => {
  return <div style={{ position: 'relative', width: '300px', height: '300px', backgroundColor: 'black' }}>
    <Loading color="dark"/>
  </div>
  ;
};

Dark.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const Small: Story = args => {
  return <div style={{ position: 'relative', width: '300px', height: '300px', backgroundColor: 'black' }}>
    <Loading size="small"/>
  </div>
  ;
};

export const Medium: Story = args => {
  return <div style={{ position: 'relative', width: '300px', height: '300px', backgroundColor: 'black' }}>
    <Loading size="medium"/>
  </div>
  ;
};

export const Larger: Story = args => {
  return <div style={{ position: 'relative', width: '300px', height: '300px', backgroundColor: 'black' }}>
    <Loading size="large"/>
  </div>
  ;
};
