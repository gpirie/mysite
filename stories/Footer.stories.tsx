// Imports
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Footer from "@/components/footer/siteFooter";

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
    }
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Header: Default
export const Default: Story = {
    render: () => <Footer title="Graeme Pirie" />,
};