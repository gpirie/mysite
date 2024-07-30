// Imports
import Link from "next/link";
import NavigationMenu from "@/components/menu/menu";
import classes from "./siteHeader.module.scss";
import { Menu } from 'types';

type Props = {
    menu: Menu[];
    title: string;
};

const SiteHeader = ({ menu, title }: Props) => {

    return (
        <header role="banner" className={classes['siteHeader']}>
            <h1>
                <Link
                    className={classes['title']}
                    href="/">
                    {title}
                </Link>
            </h1>
            <NavigationMenu styleClass="header-menu" menu={menu} />
        </header>
    );
};

export default SiteHeader;
