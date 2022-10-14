import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button from "./Button";

const meta: ComponentMeta<typeof Button> = {
  component: Button,
  title: "Design System/Button",
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
  argTypes: {
    onClick: { action: "clicked" },
    onMouseEnter: { action: "hovered" },
    onMouseLeave: { action: "unhovered" },
  },
  args: {
    "aria-label": "Hello world",
    children: "Hello world",
    disabled: false,
    submit: false,
  },
};
