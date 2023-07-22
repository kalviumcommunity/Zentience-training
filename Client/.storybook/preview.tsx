/** @type { import('@storybook/react').Preview } */
import React from "react";
import { MemoryRouter } from "react-router-dom";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators : [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
],

};

export default preview;
