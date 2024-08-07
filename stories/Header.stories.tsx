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
        label: 'Home',
        cssClasses: [ 'home-link' ],
        target: null,
        uri: '/',
    },
    {
        id: 2,
        label: 'About',
        cssClasses: [],
        target: null,
        uri: '/about/',
    },
    {
        id: 3,
        label: 'Experience',
        cssClasses: [],
        target: null,
        uri: '/experience/',
    },
    {
        id: 4,
        label: 'Linked In',
        cssClasses: [ 'linkedin' ],
        target: '_blank',
        uri: 'https://www.linkedin.com/in/graeme-pirie-08625275/',
    },
    {
        id: 5,
        label: 'GitHub',
        cssClasses: [ 'github' ],
        target: '_blank',
        uri: 'https://github.com/gpirie',
    }
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
