import { Meta, StoryObj } from "@storybook/react";
import StudentLogin from "../component/Student/StudentLogin/StudentLogin";

const meta = {
  title: "Components/Student/StudentLogin",
  component: StudentLogin,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof StudentLogin>;

export const Default: story = {};
