import { Meta, StoryObj } from "@storybook/react";
import StudentRightBar from "../component/Student/StudentSideBar/StudentRightBar";

const meta = {
  title: "Components/Student/StudentRightBar",
  component: StudentRightBar,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof StudentRightBar>;

export const Default: story = {
  args: {
    variant: "primary",
  },
};
