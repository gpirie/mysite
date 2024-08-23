// Styles
import styles from "./siteFooter.module.scss";

// Types
import { Menu } from 'types';
import NavigationMenu from "@/components/menu/menu";

type Props = {
    title: string;
    menu: Menu;
};

const siteFooter = async ({ title, menu }: Props) => {

    return (
        <footer className={styles['site-footer']}>

            <NavigationMenu
                menu={ menu }
                toggle={ false }
                menuStyles={styles}
            />

            <small className={styles['copyright']}>&copy; {title} {new Date().getFullYear()}</small>

        </footer>
    );
}

export default siteFooter;