import { Meta, StoryObj } from "@storybook/react";
import ManageStudent from "../component/Teacher/Managestudent/ManageStudent";

const meta = {
  title: "Components/Teacher/ManageStudent",
  component: ManageStudent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type story = StoryObj<typeof ManageStudent>;

export const Default: story = {};
