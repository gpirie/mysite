'use client';

// Imports
import { useState } from "react";
import Link from "next/link";

// Components
import NavigationMenu from "@/components/menu/menu";
import HamburgerIcon from '@/public/assets/icons/hamburger.svg';
import CloseIcon from '@/public/assets/icons/close.svg';

// Styles
import classes from "./siteHeader.module.scss";

// Types
import { Menu } from 'types';

type Props = {
    menu: Menu[];
    title: string;
    tagline: string;
};

const Header = ({ menu, title, tagline }: Props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header role="banner" className={classes['siteHeader']}>
            <h1 className={classes['logo']}>
                <Link
                    role="link"
                    className={classes['title']}
                    href="/">
                    {title}
                    <span className={classes['description']}>{tagline}</span>
                </Link>
            </h1>
            <nav className={ classes['header-nav'] } onClick={toggleMenu}>

                { menuOpen ? <CloseIcon data-testid="close-icon" /> : <HamburgerIcon data-testid="hamburger-icon" /> }

                <NavigationMenu
                    open={menuOpen}
                    menu={ menu }
                />
            </nav>
        </header>
    );
};

export default Header;
