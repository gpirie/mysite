// Imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/header/siteHeader';
import { navMenuMock, siteDescription, siteTitle } from '../__mocks__/header';

// Types
import { Menu } from 'types';

describe('Site Header', () => {
    it('renders without crashing', () => {
        render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });

    it('renders the site name', () => {
        render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        const titleElement = screen.getByText(siteTitle);
        expect(titleElement).toBeInTheDocument();
    });

    it('contains a navigation menu', () => {
        render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    it('renders a link to the homepage', () => {
        render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        const linkElement = screen.getByRole('link', { name: siteTitle + ' ' + siteDescription });
        expect(linkElement).toHaveAttribute('href', '/');
    });

    it('applies the correct CSS classes', () => {
        render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toHaveClass('siteHeader');

        const titleElement = screen.getByText(siteTitle);
        expect(titleElement).toHaveClass('title');
    });

    it('toggles the menu state and icon on click', () => {
        render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        const navElement = screen.getByRole('navigation');

        // Initial state
        expect(screen.queryByTestId('hamburger-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();

        // Simulate click to open menu
        fireEvent.click(navElement);
        expect(screen.queryByTestId('hamburger-icon')).not.toBeInTheDocument();
        expect(screen.queryByTestId('close-icon')).toBeInTheDocument();

        // Simulate click to close menu
        fireEvent.click(navElement);
        expect(screen.queryByTestId('hamburger-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<Header tagline={siteDescription} title={siteTitle} menu={navMenuMock} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
