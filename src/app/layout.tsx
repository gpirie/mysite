import React from "react";
import { Metadata, ResolvingMetadata } from 'next';

// Components
import Header from "@/components/header/siteHeader"
import Footer from "@/components/footer/siteFooter"

// Functions
import {fetchMenus, fetchSiteSettings} from "@/data/Data";

// Styles
import "@/styles/reset.scss";
import "@/styles/globals.scss";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata( { params, searchParams }: Props, parent: ResolvingMetadata ): Promise<Metadata> {

    // fetch data
    const siteInfo = await fetch(
        process.env.BASE_URL
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
                <Header title={settings.title} menu={headerMenu} />
                {children}
                <Footer title={settings.title} />
            </body>
            </html>
        </>
    )
}

export default RootLayout;
