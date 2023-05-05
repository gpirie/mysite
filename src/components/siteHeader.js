import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Logo from '../components/Logo';

import classes from "../styles/siteHeader.module.scss";

export default function siteHeader(props) {

    console.log(props);
    return (
        <>
        <Head>
            <title>{props.name}</title>
            <meta
                name="description"
                content="Keep up to date with the latest trends in tech"
            />
            <link rel="icon" href={props.icon} />
            {/* You can add more metadata here, like open graph tags for social media, etc */}
        </Head>

        <div className={classes.siteHeader}>

            <Link href="/">
                <Logo logo={props.logo} />
            </Link>

        </div>
        </>
    );
}