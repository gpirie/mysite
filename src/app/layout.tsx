import { Metadata, ResolvingMetadata } from 'next';
import "@/styles/globals.scss";

// Components
import Header from "@/components/header/siteHeader"
import Footer from "@/components/footer/siteFooter"

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

    return (
        <>
            <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
            </html>
        </>
    )
}

export default RootLayout;
