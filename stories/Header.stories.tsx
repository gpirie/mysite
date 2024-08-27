// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from "@/components/header/siteHeader";

// Types
import { Menu } from 'types';

// Data
const menuData: Menu = {
    id: "dGVybTo0",
    name: "Header",
    menuItems: {
        nodes: [
            {
                cssClasses: ["home-link"],
                id: "cG9zdDoyMg==",
                label: "Home",
                target: null,
                uri: "/",
                title: null,
            },
            {
                cssClasses: [],
                id: "cG9zdDoxNA==",
                label: "About",
                target: null,
                uri: "/about/",
                title: null,
            },
            {
                cssClasses: [],
                id: "cG9zdDoyMQ==",
                label: "Experience",
                target: null,
                uri: "/experience/",
                title: null,
            },
            {
                cssClasses: ["linkedin"],
                id: "cG9zdDoxNg==",
                label: "Linked In",
                target: "_blank",
                uri: "https://www.linkedin.com/in/graeme-pirie-08625275/",
                title: null,
            },
            {
                cssClasses: ["github"],
                id: "cG9zdDoxOA==",
                label: "GitHub",
                target: "_blank",
                uri: "https://github.com/gpirie",
                title: null,
            },
        ],
    },
};

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
        menu: menuData,
    },
};
