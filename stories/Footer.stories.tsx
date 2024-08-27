// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Footer from "@/components/footer/siteFooter";

// Data
import { footerMenu } from "./data/footerMenu";

// Types
import { Menu } from 'types';


// Story config
const meta: Meta<typeof Footer> = {
    title: 'UI/Footer',
    component: Footer,
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
    },
    argTypes: {
        title: { control: 'text' },
        menu: { control: 'object' },
    },
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Header: Default
export const Default: Story = {
    args: {
        title: 'Graeme Pirie',
        menu: footerMenu,
    },
};