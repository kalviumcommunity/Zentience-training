import { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "../component/404Error/ErrorPage";

const meta = {
  title: "Components/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default meta;
type story = StoryObj<typeof ErrorPage>;

export const Default: story = {
  args: {
    variant: "primary",
  },
};
