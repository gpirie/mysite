// Imports
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
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

        // 1. Hamburger Icon Click
        let mobileMenu = canvas.getByRole('navigation');
        await expect(mobileMenu).toBeVisible();

        // 2. Close Mobile Menu
        await userEvent.click(mobileMenu);
        // await expect(mobileMenu).not.toBeVisible();
        // await expect(screen.queryByTestId('hamburger-icon')).toBeInTheDocument();
        // await expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
        //
        // // 3. Navigation Item Click
        //await userEvent.click(hamburgerIcon); // Open menu again
        // const menuItem = canvas.getByText('Home'); // Replace with actual menu item text
        // await userEvent.click(menuItem);
        // mobileMenu = canvas.queryByRole('navigation', { name: /menu/i });
        // await expect(mobileMenu).not.toBeVisible(); // Assuming menu closes on click
        //
        // 4. Check Dark Mode Styles
        // const header = canvas.getByRole('banner'); // Adjust the role if needed
        // await expect(header).toHaveStyle('background-color: var(--primary-colour-dark)');
        //
        // // 5. Resize Window
        // await window.resizeTo(320, 800); // Small screen size
        // await expect(hamburgerIcon).toBeVisible();
        // await window.resizeTo(1024, 800); // Larger screen size
        // await expect(hamburgerIcon).not.toBeVisible();
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
