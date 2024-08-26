'use client';

// Imports
import Link from "next/link";

// Components
import NavigationMenu from "@/components/menu/menu";

// Styles
import classes from "./siteHeader.module.scss";

// Types
import { Menu } from 'types';

type Props = {
    menu: Menu;
    title: string;
    tagline: string;
};

const Header = ({ menu, title, tagline }: Props) => {

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

            <NavigationMenu
                menu={ menu }
                toggle={ true }
                menuStyles={classes}
            />
        </header>
    );
};

export default Header;
