// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from "@/components/header/siteHeader"

// Utilities
import darkModeStoryConfig from "@/utils/DarkMode";

// Story config
const meta: Meta<typeof Header> = {
  title: 'Components/Blocks/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: darkModeStoryConfig()
    }
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

// Header: Default
export const Default: Story = {
  render: () => <Header menu={ [] } />,
};
