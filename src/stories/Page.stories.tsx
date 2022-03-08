import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "./Page";

export default {
  title: "TSP/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args: any) => <Page {...args} />;

export const DefaultPage = Template.bind({});
DefaultPage.args = {
  point_count: 10,
};
