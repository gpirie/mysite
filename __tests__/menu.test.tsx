// Imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationMenu from "../src/app/components/menu/menu"; // Adjust the import path as needed

// Data Mocks
import { navMenuMock } from '../__mocks__/header';
import { siteDescription, siteTitle } from '../__mocks__/global';

// Types
import { Menu } from 'types';
import Header from "../src/app/components/header/siteHeader";

const menuStyles = {
    'header-nav': 'header-nav-class',
    'header-menu': 'header-menu-class',
    'header-menu--open': 'menu-open',
    'header-menu--close': 'menu-close',
    'header-menu__item': 'menu-item-class',
};


it('renders correctly and matches snapshot', () => {

    const { container } = render(<NavigationMenu menu={navMenuMock} menuStyles={menuStyles} toggle={true} />);
    expect(container).toMatchSnapshot();
});

it('toggles menu open and close states', () => {
    render(<NavigationMenu menu={navMenuMock} menuStyles={menuStyles} toggle={true} />);

    // Initially, hamburger icon should be visible
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeInTheDocument();

    // Click to open the menu
    fireEvent.click(hamburgerIcon);
    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();

    // Click to close the menu
    fireEvent.click(closeIcon);
    expect(screen.getByTestId('hamburger-icon')).toBeInTheDocument();
});

it('renders navigation menu with correct number of items', () => {
    render(<NavigationMenu menu={navMenuMock} menuStyles={menuStyles} toggle={true} />);

    const menuItems = screen.getAllByRole('link');
    expect(menuItems).toHaveLength(5); // Expecting five menu items
});

it('does not render list item if uri is undefined', () => {
    const navMenuMock: Menu = {
        id: "dGVybTo0",
        name: "Header",
        menuItems: {
            nodes: [
                {
                    cssClasses: ["home-link"],
                    id: "cG9zdDoyMg==",
                    label: "Home",
                    target: null,
                    uri: undefined,
                    title: null,
                },
            ],
        },
    };

    render(<NavigationMenu menu={navMenuMock} menuStyles={menuStyles} toggle={true} />);

    const menuItems = screen.queryAllByRole('listitem');
    expect(menuItems).toHaveLength(0); // No list items should be rendered
});

it('does not render toggle icons when toggle prop is false', () => {
    render(<NavigationMenu menu={navMenuMock} menuStyles={menuStyles} toggle={false} />);

    expect(screen.queryByTestId('hamburger-icon')).toBeNull();
    expect(screen.queryByTestId('close-icon')).toBeNull();
});

