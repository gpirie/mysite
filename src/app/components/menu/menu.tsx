// Imports
import Link from "next/link";
import GitHubIcon from "@/public/assets/icons/github.svg";
import LinkedinIcon from "@/public/assets/icons/linkedin.svg";

// Styles
import styles from "./menu.module.scss";

// Types
import { Menu } from "types";

type Props = {
    menu: Menu[];
    open?: boolean;
}

const NavigationMenu = ( { menu, open } : Props ) => {

    const menuName = menu.name.toLowerCase();

    return (

        <ol className={`${styles[`${menuName}-menu`]} ${open ? styles[`${menuName}-menu--open`] : styles[`${menuName}-menu--close`]}`}>
            {/*//{*/}
            {/*//     menu?.map((e) => {*/}
            {/*//*/}
            {/*//         if (e.uri) {*/}
            {/*//*/}
            {/*//             const classNames = e.cssClasses*/}
            {/*//                 ? e.cssClasses.map(className => styles[className]).join(' ')*/}
            {/*//                 : '';*/}
            {/*//*/}
            {/*//             let label = e.label;*/}
            {/*//             if (classNames.includes(styles['linkedin'])) {*/}
            {/*//                 // @ts-ignore*/}
            {/*//                 label = (*/}
            {/*//                     <>*/}
            {/*//                         <span className={styles['label-text']}>{e.label}</span>*/}
            {/*//                         <LinkedinIcon className={`${styles['linkedin-icon']} ${styles['common-icon-style']}`} />*/}
            {/*//                     </>*/}
            {/*//                 );*/}
            {/*//             } else if (classNames.includes(styles['github'])) {*/}
            {/*//                 // @ts-ignore*/}
            {/*//                 label = (*/}
            {/*//                     <>*/}
            {/*//                         <span className={styles['label-text']}>{e.label}</span>*/}
            {/*//                         <GitHubIcon className={`${styles['github-icon']} ${styles['common-icon-style']}`} />*/}
            {/*//                     </>*/}
            {/*//                 );*/}
            {/*//             }*/}
            {/*//*/}
            {/*//             return (*/}
            {/*//                 <li className={`${styles['header-menu__item']}`} key={e.id}>*/}
            {/*//                     <Link*/}
            {/*//                         className={classNames}*/}
            {/*//                         target={e.target || undefined}*/}
            {/*//                         href={e.uri}>*/}
            {/*//                         {label}*/}
            {/*//                     </Link>*/}
            {/*//                 </li>*/}
            {/*//             )*/}
            {/*//         }*/}
            {/*//         return null; // Handle cases where e.uri is undefined*/}
            {/*//     })*/}
            {/*// }*/}
        </ol>
    );
}

export default NavigationMenu;
