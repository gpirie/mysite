// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from "@/components/header/siteHeader";

// Data
const menuData = [
    {
        id: 1,
        label: 'About',
        uri: '/about',
    },
    {
        id: 2,
        label: 'Connect',
        uri: 'https://www.linkedin.com/in/graeme-pirie-08625275/',
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
                pathname: '/'
            }
        },
        backgrounds: {
            default: 'light',
        }
    }
};

export default meta;
type Story = StoryObj<typeof Header>;

// Header: Default
export const Default: Story = {
    render: () => <Header title="Graeme Pirie" menu={menuData} />,
};