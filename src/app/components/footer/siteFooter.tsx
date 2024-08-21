// Styles
import styles from "./siteFooter.module.scss";

// Types
import { Menu } from 'types';
import NavigationMenu from "@/components/menu/menu";
import {fetchMenuByName} from "@/data/Data";

type Props = {
    title: string;
    menu: Menu;
};

const siteFooter = async ({ title, menu }: Props) => {

    const legalMenu = await fetchMenuByName( 'Legal');

    return (
        <footer className={styles['site-footer']}>

            <NavigationMenu
                menu={ menu }
                toggle={ false }
                menuStyles={styles}
            />

            <NavigationMenu
                menu={ legalMenu }
                toggle={ false }
                menuStyles={styles}
            />

            <small>&copy; {title} {new Date().getFullYear()}</small>
        </footer>
    );
}

export default siteFooter;