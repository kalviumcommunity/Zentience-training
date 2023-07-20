import { Meta, StoryObj } from "@storybook/react";
import StudentLeftBar from "../component/Student/StudentSideBar/StudentLeftBar";

const meta = {
  title: "Components/Student/StudentLeftBar",
  component: StudentLeftBar,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof StudentLeftBar>;

export const Default: story = {};
