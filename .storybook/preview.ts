// Imports
import type { Preview } from "@storybook/react";

import "@/styles/reset.scss";
import "@/styles/globals.scss";

export const preview: Preview = {
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        'color-contrast': {enabled: true, options: {level: 'AAA'}},
                    },
                ],
            }
        },
        backgrounds: {
            default: 'light',
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
                order: ['UI', ['Header', 'Footer']],
                locales: 'en-GB',
            }
        }
    },
};

