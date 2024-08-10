'use client';

// Imports
import Link from "next/link";
import GitHubIcon from "@/public/assets/icons/github.svg";
import LinkedinIcon from "@/public/assets/icons/linkedin.svg";

// Styles
import styles from "./menu.module.scss";
import headerStyles from "../header/siteHeader.module.scss"

// Types
import { Menu } from "types";
import {useState} from "react";
import CloseIcon from "@/public/assets/icons/close.svg";
import HamburgerIcon from "@/public/assets/icons/hamburger.svg";

type Props = {
    menu: Menu;
    toggle?: boolean;
}

const NavigationMenu = ( { menu, toggle } : Props ) => {

    const menuName = menu?.name?.toLowerCase();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    console.log( menuName + ' toggle = ' + toggle);

    return (

        <nav className={`${headerStyles[`${menuName}-nav`]}`} onClick={toggleMenu}>

            {toggle && (
                <>
                    {menuOpen ? (
                        <CloseIcon className={headerStyles['close-icon']} data-testid="close-icon" />
                    ) : (
                        <HamburgerIcon className={headerStyles['menu-icon']} data-testid="hamburger-icon" />
                    )}
                </>
            )}

            <ol className={`${styles[`${menuName}-menu`]} ${menuName === 'header' ? (menuOpen ? styles[`${menuName}-menu--open`] : styles[`${menuName}-menu--close`]) : ''}`}>

                {
                    menu?.menuItems.nodes.map((e) => {

                        if (e.uri) {

                            const classNames = e.cssClasses
                                ? e.cssClasses.map(className => styles[className]).join(' ')
                                : '';

                            let label = e.label;
                            if (classNames.includes(styles['linkedin'])) {
                                // @ts-ignore
                                label = (
                                    <>
                                        <span className={styles['label-text']}>{e.label}</span>
                                        <LinkedinIcon className={`${styles['linkedin-icon']} ${styles['common-icon-style']}`} />
                                    </>
                                );
                            } else if (classNames.includes(styles['github'])) {
                                // @ts-ignore
                                label = (
                                    <>
                                        <span className={styles['label-text']}>{e.label}</span>
                                        <GitHubIcon className={`${styles['github-icon']} ${styles['common-icon-style']}`} />
                                    </>
                                );
                            }

                            return (
                                <li className={`${styles['header-menu__item']}`} key={e.id}>
                                    <Link
                                        className={classNames}
                                        target={e.target || undefined}
                                        href={e.uri}>
                                        {label}
                                    </Link>
                                </li>
                            )
                        }
                        return null; // Handle cases where e.uri is undefined
                    })
                }
            </ol>
        </nav>
    );
}

export default NavigationMenu;
