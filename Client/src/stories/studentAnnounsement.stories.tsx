import { Meta, StoryObj } from "@storybook/react";
import StudentsAnnouncements from "../component/Student/StudentAnnouncement/StudentsAnnouncements";
const meta = {
  title: "Components/Student/StudentsAnnouncements",
  component: StudentsAnnouncements,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof StudentsAnnouncements>;

export const Default: story = {
  args: {
    variant: "primary",
  },
};
