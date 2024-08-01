// Imports
import Link from "next/link";

// Styles
import styles from "./menu.module.scss";

// Types
import { Menu } from "types";

type Props = {
    menu: Menu[];
    open: boolean;
}

const NavigationMenu = ( { menu, open } : Props ) => {

    return (
        <ol role="navigation" className={`${styles['header-menu']} ${open ? styles['header-menu--open'] : styles['header-menu--close']}`}>
            {
                menu?.map((e) => {
                    if (e.uri) {
                        return (
                            <li className={`${styles['header-menu__item']}`} key={e.id}>
                                <Link
                                    className={e.cssClasses ? e.cssClasses : undefined}
                                    target={e.target !== null && e.target !== undefined ? e.target : undefined}
                                    href={e.uri}>
                                    {e.label}
                                </Link>
                            </li>
                        )
                    }
                })
            }
        </ol>
    );
}

export default NavigationMenu;