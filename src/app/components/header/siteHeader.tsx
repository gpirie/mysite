// Components
import NavigationMenu from "@/components/menu/menu";

// Styles
import classes from "./siteHeader.module.scss";

// Types
import { Menu } from 'types';

type Props = {
    menu: Menu[];
}

const siteHeader = ( { menu } : Props ) => {

    return (
        <header className={classes.siteHeader}>
            <NavigationMenu menu={menu} />
        </header>
    );
}

export default siteHeader;