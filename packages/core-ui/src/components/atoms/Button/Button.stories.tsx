import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { IButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <Button {...args}> {args.children} </Button>
);

export const Primary = Template.bind({});
Primary.args = { type: 'Primary', children: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { type: 'Secondary', children: 'Secondary' };
