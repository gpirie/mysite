'use client';

// Imports
import Link from "next/link";
import {useState} from "react";

// Types
import { Menu } from "types";

// Components
import CloseIcon from "@/public/assets/icons/close.svg";
import HamburgerIcon from "@/public/assets/icons/hamburger.svg";
import GitHubIcon from "@/public/assets/icons/github.svg";
import LinkedinIcon from "@/public/assets/icons/linkedin.svg";

type Props = {
    menu: Menu;
    toggle?: boolean;
    menuStyles: { [key: string]: string };
}

const NavigationMenu = ( { menu, toggle, menuStyles } : Props ) => {

    const menuName = menu?.name?.toLowerCase();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <nav className={`${menuStyles[`${menuName}-nav`]}`} onClick={toggleMenu}>

            {toggle && (
                <>
                    {menuOpen ? (
                        <CloseIcon className={menuStyles['close-icon']} data-testid="close-icon" />
                    ) : (
                        <HamburgerIcon className={menuStyles['menu-icon']} data-testid="hamburger-icon" />
                    )}
                </>
            )}

            <ol className={`${menuStyles[`${menuName}-menu`]} ${menuName === 'header' ? (menuOpen ? menuStyles[`${menuName}-menu--open`] : menuStyles[`${menuName}-menu--close`]) : ''}`}>

                {
                    menu?.menuItems.nodes.map((e) => {

                        if (e.uri) {

                            const classNames = e.cssClasses
                                ? e.cssClasses.map(className => menuStyles[className]).join(' ')
                                : '';

                            let label = e.label;
                            if (classNames.includes(menuStyles['linkedin'])) {
                                // @ts-ignore
                                label = (
                                    <>
                                        <span className={menuStyles['label-text']}>{e.label}</span>
                                        <LinkedinIcon className={`${menuStyles['linkedin-icon']} ${menuStyles['common-icon-style']}`} />
                                    </>
                                );
                            } else if (classNames.includes(menuStyles['github'])) {
                                // @ts-ignore
                                label = (
                                    <>
                                        <span className={menuStyles['label-text']}>{e.label}</span>
                                        <GitHubIcon className={`${menuStyles['github-icon']} ${menuStyles['common-icon-style']}`} />
                                    </>
                                );
                            }

                            return (
                                <li className={`${menuStyles[`${menuName}-menu__item`]}`} key={e.id}>
                                    <Link
                                        className={classNames}
                                        target={e.target || undefined}
                                        href={e.uri}
                                        title={e.title}>
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
