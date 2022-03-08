import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Point } from "./Point";

export default {
  title: "TSP/Point",
  component: Point,
} as ComponentMeta<typeof Point>;

const Template: ComponentStory<typeof Point> = (args: any) => (
  <Point {...args} />
);

export const DefaultPoint = Template.bind({});
DefaultPoint.args = {
  x: 10,
  y: 10,
  id: 1,
};
