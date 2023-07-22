import { Meta, StoryObj } from "@storybook/react";
import RightBar from "../component/Teacher/SideBar/RightBar";

const meta = {
  title: "Components/Teacher/RightBar",
  component: RightBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type story = StoryObj<typeof RightBar>;

export const Default: story = {};
