// Imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from "../src/app/components/footer/siteFooter";
import { footerMenu, siteTitle } from '../__mocks__/footer';

// Styles
import styles from "../src/app/components/footer/siteFooter.module.scss";

describe('Site Footer', () => {
    it('renders without crashing', () => {
        render(<Footer title={siteTitle} menu={footerMenu} />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    it('renders siteFooter correctly', () => {
       const { asFragment } = render(<Footer title={siteTitle} menu={footerMenu} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders the footer with the provided title and menu', () => {
        render(<Footer title={siteTitle} menu={footerMenu} />);

        expect(screen.getByText(new RegExp(siteTitle, 'i'))).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        expect(screen.getByText(`© ${siteTitle} ${new Date().getFullYear()}`)).toBeInTheDocument();
    });

    it('passes the correct props to NavigationMenu', () => {
        render(<Footer title={siteTitle} menu={footerMenu} />);

        const navigationMenu = screen.getByRole('navigation');
        expect(navigationMenu).toBeInTheDocument();
        // You can also use jest.mock to assert on props passed to NavigationMenu
    });

    it('footer has correct role', () => {
        render(<Footer title={siteTitle} menu={footerMenu} />);

        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('applies correct CSS classes', () => {
        const { container } = render(<Footer title={siteTitle} menu={footerMenu} />);

        const footer = container.querySelector('footer');
        expect(footer).toHaveClass(styles['site-footer']);

        const copyright = container.querySelector('small');
        expect(copyright).toHaveClass(styles['copyright']);
    });

    it('renders the current year in copyright text', () => {
        const currentYear = new Date().getFullYear();
        render(<Footer title={siteTitle} menu={footerMenu} />);

        expect(screen.getByText(`© ${siteTitle} ${currentYear}`)).toBeInTheDocument();
    });
});
