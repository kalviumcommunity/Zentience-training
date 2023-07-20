import { Meta, StoryObj } from "@storybook/react";
import Assignments from "../component/Student/Assignments/Assignments";

const meta = {
  title: "Components/Student/Assigments",
  component: Assignments,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof Assignments>;

export const Default: story = {};
