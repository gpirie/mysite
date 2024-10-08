import React from "react";
import { Metadata } from 'next';

// Components

import Header from "@/components/header/siteHeader"
import Footer from "@/components/footer/siteFooter"

// Functions
import {fetchMenuByName, fetchSiteSettings} from "@/data/Data";

// WordPress Styles
import "@wordpress/block-library/build-style/common.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

// Styles
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import styles from "./(url-paths)/[slug]/page.module.scss";

export async function generateMetadata(): Promise<Metadata> {

    // fetch data
    const siteInfo = await fetch(
        process.env.BASE_URL as string
    )
    const sitemeta = await siteInfo.json();

    // Return data
    return {
        title: `${sitemeta.name} | ${sitemeta.description}`,
        description: sitemeta.description,
        icons: sitemeta.site_icon_url,
    }
}

const RootLayout = async ({children}: {children: React.ReactNode}) => {

    const headerMenu =  await fetchMenuByName('Header');

    const footerMenu = await fetchMenuByName( 'Footer');

    const settings = await fetchSiteSettings();

    return (
        <>
            <html lang="en">
            <body>
                <Header title={settings.title} tagline={settings.description} menu={headerMenu} />
                <main className={styles['main-content']}>
                    {children}
                </main>
                <Footer title={settings.title} menu={footerMenu} />
            </body>
            </html>
        </>
    )
}

export default RootLayout;
