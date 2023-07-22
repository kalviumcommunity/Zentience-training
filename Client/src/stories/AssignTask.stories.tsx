import { Meta, StoryObj } from "@storybook/react";
import AssignTasks from "../component/Teacher/AssignTasks/AssignTasks";

const meta = {
  title: "Components/Teacher/AssignTasks",
  component: AssignTasks,
  tags: ["autodocs"],

  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type story = StoryObj<typeof AssignTasks>;

export const Default: story = {};
