// Imports
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fireEvent, waitFor } from '@storybook/test';
import { expect } from '@storybook/jest';

// Components
import Header from "@/components/header/siteHeader";

// Data
import { headerMenu } from "./data/headerMenu";

// Types
import { Menu } from 'types';

// Data

// Story config
const meta: Meta<typeof Header> = {
    title: 'UI/Header',
    component: Header,
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
            },
        },
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        tagline: { control: 'text' },
        title: { control: 'text' },
        menu: { control: 'object' },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Toggles menu state
        const navElement = canvas.getByRole('navigation');

        // Initial state
        expect(canvas.queryByTestId('hamburger-icon')).toBeInTheDocument();
        await waitFor(() => {
            expect(canvas.queryByTestId('close-icon')).not.toBeInTheDocument();
        });

        // Simulate click to open menu
        await fireEvent.click(navElement);
        expect(canvas.queryByTestId('close-icon')).toBeInTheDocument();

        // Simulate click to close menu
        fireEvent.click(navElement);
        await waitFor(() => {
            expect(canvas.queryByTestId('hamburger-icon')).toBeInTheDocument();
        });
    }
};

export default meta;
type Story = StoryObj<typeof Header>;

// Header: Default
export const Default: Story = {
    args: {
        tagline: 'Software Engineer',
        title: 'Graeme Pirie',
        menu: headerMenu,
    },
};

export const WithDifferentMenu: Story = {
    args: {
        tagline: 'Frontend Developer',
        title: 'Jane Doe',
        menu: {
            id: "2",
            name: 'Header',
            menuItems: {
                nodes: [
                    {id: "1", label: 'Portfolio', title: "Portfolio", cssClasses: [], target: null, uri: '/portfolio/'},
                    {id: "2", label: 'Blog', title: "Blog", cssClasses: [], target: null, uri: '/blog/'},
                ],
            },
        },
    },
}
