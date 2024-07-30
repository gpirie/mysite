// Imports
import Link from "next/link";

// Styles
import styles from "./menu.module.scss";

// Types
import { Menu } from "types";

type Props = {
    styleClass: string;
    menu: Menu[];
}

const NavigationMenu = ( { styleClass, menu } : Props ) => {
    return (
        <ol className={styles[styleClass]}>
            {
                menu?.map((e, index) => {
                    return (
                        <Link
                            key={index}
                            href={e.uri}>
                            {e.label}
                        </Link>
                    )
                })
            }
        </ol>
    );
}

export default NavigationMenu;