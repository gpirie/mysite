// Imports
import Link from "next/link";

// Data
import {fetchSiteSettings} from "@/data/Data";

// Components
import NavigationMenu from "@/components/menu/menu";

// Styles
import classes from "./siteHeader.module.scss";

// Types
import { Menu } from 'types';

type Props = {
    menu: Menu[];
}

const siteHeader = async ( { menu } : Props ) => {

    const settings = await fetchSiteSettings();

    return (
        <header className={classes.siteHeader}>

            <h1 className={classes['title']}>
                <Link href="/">
                    {settings.title}
                </Link>
            </h1>

            <NavigationMenu styleClass="header-menu" menu={menu} />
        </header>
    );
}

export default siteHeader;