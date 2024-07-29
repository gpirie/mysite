import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-styling-webpack",
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
