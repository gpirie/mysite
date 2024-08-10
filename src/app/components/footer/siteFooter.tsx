// Styles
import styles from "./siteFooter.module.scss";


// Types
import { Menu } from 'types';
import NavigationMenu from "@/components/menu/menu";

type Props = {
    title: string;
    menu: Menu[];
};

const siteFooter = ({ title, menu }: Props) => {

    console.log(menu);

    return (
        <footer className={styles['site-footer']}>
            <NavigationMenu
                menu={ menu }
            />

            <small>&copy; {title} {new Date().getFullYear()}</small>
        </footer>
    );
}

export default siteFooter;