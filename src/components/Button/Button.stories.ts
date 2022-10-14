import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

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
    buttonClassName:
      "text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded",
    children: "Hello world",
    disabled: false,
    submit: false,
  },
};
