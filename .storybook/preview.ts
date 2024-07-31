import type { Preview } from "@storybook/react";

import "@/styles/reset.scss";
import "@/styles/globals.scss";

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
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['UI'],
                locales: 'en-GB',
            }
        }
    },
};

export default preview;
