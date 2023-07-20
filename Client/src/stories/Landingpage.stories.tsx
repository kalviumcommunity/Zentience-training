import { Meta, StoryObj } from "@storybook/react";
import LandingPage from "../component/LandingPage/LandingPage";

const meta = {
  title: "Components/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof LandingPage>;

export const Default: story = {};
