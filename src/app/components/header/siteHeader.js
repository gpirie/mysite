import Link from "next/link";
import classes from "./siteHeader.module.scss";

import { getSiteLogoUrl } from "@/utils/wordpress";
import Image from "next/image";

export default async function siteHeader() {

    const logo = await getSiteLogoUrl();

    console.log(logo)

    return (
        <>

            <header className={classes.siteHeader}>

                <Link href="/">
                    <Image src={logo.url} alt={logo.alt} height={logo.height} width={logo.width} />
                </Link>

            </header>
        </>
    );
}