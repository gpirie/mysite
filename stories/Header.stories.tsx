// Imports
import type { Meta, StoryObj } from '@storybook/react';

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
