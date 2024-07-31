// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from "@/components/header/siteHeader"

// Story config
const meta: Meta<typeof Header> = {
    title: 'Components/Blocks/Header',
    component: Header,
    parameters: {
        backgrounds: {
            default: 'light',
        }
    }
};

export default meta;
type Story = StoryObj<typeof Header>;

// Header: Default
export const Default: Story = {
    render: () => <Header title="Graeme Pirie" menu={ [] } />,
};