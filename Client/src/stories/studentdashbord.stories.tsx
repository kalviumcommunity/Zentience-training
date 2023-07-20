import { Meta, StoryObj } from "@storybook/react";
import StudentDasboard from "../component/Student/StudentDasboard/StudentDashboard";
const meta = {
  title: "Components/Student/StudentDasboard",
  component: StudentDasboard,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof StudentDasboard>;

export const Default: story = {};
