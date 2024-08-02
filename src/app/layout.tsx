import React from "react";
import { Metadata } from 'next';

// Components
import Header from "@/components/header/siteHeader"
import Footer from "@/components/footer/siteFooter"

// Functions
import {fetchMenus, fetchSiteSettings} from "@/data/Data";

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
        title: sitemeta.name,
        description: sitemeta.description,
        icons: sitemeta.site_icon_url,
    }
}

const RootLayout = async ({children}: {children: React.ReactNode}) => {

    const headerMenu =  await fetchMenus('MAIN_MENU');

    const settings = await fetchSiteSettings();

    return (
        <>
            <html lang="en">
            <body>
                <Header title={settings.title} tagline={settings.description} menu={headerMenu} />
                <main className={styles['main-content']}>
                    {children}
                </main>
                <Footer title={settings.title} />
            </body>
            </html>
        </>
    )
}

export default RootLayout;
