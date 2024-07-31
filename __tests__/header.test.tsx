// Imports
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


// Data
import { navMenuMock, siteTitle } from "../__mocks__/header";

//Components
import Header from '@/components/header/siteHeader';

describe('Header', () => {

    it('renders without crashing', async () => {

        render(<Header title={siteTitle} menu={navMenuMock} />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });

    it('renders the site name', async () => {
        render(<Header title={siteTitle} menu={navMenuMock} />);

        // Wait for the element to appear
        const titleElement = await screen.findByText(siteTitle);

        expect(titleElement).toBeInTheDocument();
    });

    it('contains a navigation menu', async () => {
        render(<Header title={siteTitle} menu={navMenuMock} />);
        const navElement = await screen.findByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    it('passes the correct menu prop to NavigationMenu', async () => {
        render(<Header title={siteTitle} menu={navMenuMock} />);
        const navMenu = await screen.findByRole('navigation');
        expect(navMenu).toHaveAttribute('class', 'header-menu');
    });

    it('renders a link to the homepage', async () => {
        render(<Header title={siteTitle} menu={navMenuMock} />);
        const linkElement = await screen.findByRole('link', { name: siteTitle });
        expect(linkElement).toHaveAttribute('href', '/');
    });

    it('applies the correct CSS classes', async () => {
        render(<Header title={siteTitle} menu={navMenuMock} />);
        const headerElement = await screen.findByRole('banner');
        expect(headerElement).toHaveClass('siteHeader');

        const titleElement = await screen.findByText(siteTitle);
        expect(titleElement).toHaveClass('title');
    });
});
