import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Area } from './Area';
import * as PageStories from './Page.stories';

export default {
  title: 'TSP/Area',
  component: Area,
} as ComponentMeta<typeof Area>;

const Template: ComponentStory<typeof Area> = (args: any) => <Area {...args} />;

export const DefaultArea = Template.bind({});
DefaultArea.args = {
  ...PageStories.DefaultPage.args,
};
