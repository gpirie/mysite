import type { Preview } from "@storybook/react";

import "@/styles/globals.scss";
import "@/styles/reset.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'events',
          value: '#070a24',
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// import type { Preview } from '@storybook/react';
//
// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
//   tags: ['autodocs'],
// };
//
// export default preview;
