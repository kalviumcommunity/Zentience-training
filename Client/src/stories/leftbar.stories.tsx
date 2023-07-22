import { Meta, StoryObj } from "@storybook/react";
import LeftBar from "../component/Teacher/SideBar/LeftBar";

const meta = {
  title: "Components/Teacher/LeftBar",
  component: LeftBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type story = StoryObj<typeof LeftBar>;

export const Default: story = {};
