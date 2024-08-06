// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from "@/components/header/siteHeader";

// Types
import { Menu } from 'types';

// Data
const menuData: Menu[] = [
    {
        id: 1,
        label: 'About',
        uri: '/about',
        target: '_self',
    },
    {
        id: 2,
        label: 'Connect',
        uri: 'https://www.linkedin.com/in/graeme-pirie-08625275/',
        target: '_blank',
    },
    // Add more items as needed
];

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
};

export default meta;
type Story = StoryObj<typeof Header>;

// Header: Default
export const Default: Story = {
    render: () => <Header tagline="Software Engineer" title="Graeme Pirie" menu={menuData} />,
};
