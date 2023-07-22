import { Meta, StoryObj } from "@storybook/react";
import TeachersAnnouncements from "../component/Teacher/Announcements/TeachersAnnouncement";

const meta = {
  title: "Components/Teacher/Assigments",
  component: TeachersAnnouncements,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type story = StoryObj<typeof TeachersAnnouncements>;

export const Default: story = {};
